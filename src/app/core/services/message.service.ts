import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal, { SweetAlertIcon, } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MesaggeService {

  private translateService = inject(TranslateService);

  errorMessage(error: HttpErrorResponse) {
    this.optionsAlert('error', error.message ?? 'errors.serverError', 'Error!');
  }

  succesMessage(message: string, title?: string) {
    this.optionsAlert('success', message, title);
  }

  warningMessage(message: string, title?: string) {
    this.optionsAlert('warning', message, title);
  }

  infoMessage(message: string, title?: string) {
    this.optionsAlert('info', message, title);
  }

  optionsAlert(typeMessage: SweetAlertIcon, message: string, title?: string) {
    Swal.fire({
      title: title ?? 'Vilean te informa!',
      text: this.translateService.instant(message),
      icon: typeMessage,
      showConfirmButton: false,
      timer: 3000
    });
  }
}
