import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { MesaggeService } from '../services/message.service';
import { AppState } from 'src/app/store/app.reducer';
import { clearProfile } from 'src/app/store/actions/user.actions';
import { clearCart } from 'src/app/store/actions/cart.actions';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private mesaggeService = inject(MesaggeService);
  private state = inject(Store<AppState>);
  private router = inject(Router);

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
      localStorage.clear();
      this.state.dispatch(clearCart());
      this.state.dispatch(clearProfile());
      this.router.navigate(['/login']);
      // Cuando apliquemos el refresh, podemos poner un return aca.
    }
    this.mesaggeService.errorMessage(error);
  }
}
