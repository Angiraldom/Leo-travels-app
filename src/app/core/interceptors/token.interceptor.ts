import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private cookieService = inject(CookieService);
  private authService = inject(AuthService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.cookieService.getValue('token');
    if (token) {
      return this.addToken(request, next);
    }
    return next.handle(request);
  }

  private addToken(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ) {
    const isValidToken = this.cookieService.isValidToken('token');

    if (isValidToken) {
      return this.addBearertoken(request, next);
    }
    return this.addRefreshToken(request, next);
  }

  private addRefreshToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const isValidRefreshToken =
      this.cookieService.isValidToken('refresh_token');
    // DESPLEGAR LA VARIABLE DEL BACKKKKKKKKKKKKKKKKKKKKKKK
    if (isValidRefreshToken) {
      const refresh_token = this.cookieService.getValue('refresh_token');
      // la peticion no esta funcionando ya que cuando la va hacer, vuelve y empieza desde arriba
      // por el interceptor, hay que agregar un decorador publico a esta peticion.
      // Cuando el refreshToken este invalido, mandar la peticion normal con el token vencido.
      return this.authService
        .postMethod('auth/refresh_token', { refresh_token })
        .pipe(
          tap((res: any) => {
            this.authService.saveTokens(res.data);
          })
        )
        .pipe(switchMap(() => this.addBearertoken(request, next)));
    }

    return next.handle(request);
  }

  /**
   * Adds the bearer token in the headers request.
   */
  private addBearertoken(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.cookieService.getValue('token');
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    return next.handle(authRequest);
  }
}
