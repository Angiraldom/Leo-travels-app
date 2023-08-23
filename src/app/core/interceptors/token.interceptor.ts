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
      return this.addToken(request, next, token);
    }
    return next.handle(request);
  }

  private addToken(
    request: HttpRequest<unknown>,
    next: HttpHandler,
    token: string
  ) {
    const isValidToken = this.cookieService.isValidToken('token');

    if (isValidToken) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(authRequest);
    }
    return this.addRefreshToken(request, next);
  }

  private addRefreshToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const isValidRefreshToken =
      this.cookieService.isValidToken('refresh_token');

    if (isValidRefreshToken) {
      return this.authService
      // Agregar token
        .postMethod('auth/refresh_token', { refresh_token: '' })
        .pipe(
          tap((res: any) => {
            this.authService.saveTokens(res.data);
          })
        )
        .pipe(switchMap(() => this.token(request, next)));
    }

    return next.handle(request);
  }

  private token(request: HttpRequest<unknown>, next: HttpHandler) {
    const authRequest = request.clone({
      // Agregar token
      headers: request.headers.set('Authorization', `Bearer ${''}`),
    });
    return next.handle(authRequest);
  }
}
