import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MesaggeService } from '../services/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private mesaggeService = inject(MesaggeService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'products.form.name';

        this.mesaggeService.errorMessage(errorMessage);

        return throwError(() => error);
      })
    );
  }
}
