import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MesaggeService } from '../services/message.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private mesaggeService = inject(MesaggeService);
  private authService = inject(AuthService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        
        this.validateExpiredToken(error);
        
        return throwError(() => error);
      })
    );
  }

  /**
   * Validate if the error is 401 for doing logout, because the token will be expired
   */
  validateExpiredToken(error: HttpErrorResponse) {
    if (error.status === 401 && error.error?.tag === 'ErrorTokenExpired') {
      this.authService.logout();
      // Cuando apliquemos el refresh, podemos poner un return aca.
    }
    this.mesaggeService.errorMessage(error);
  }
}
