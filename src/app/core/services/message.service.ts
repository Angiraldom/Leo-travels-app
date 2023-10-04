import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MesaggeService {
  private translateService = inject(TranslateService);

  errorMessage(error: HttpErrorResponse) {
    const nameError = error.error['tag'] ?? 'ErrorServer';
    this.optionsAlert('error', `errors.${nameError}`, 'Error!');
  }

  succesMessage(message: string, title?: string) {
    const object: SweetAlertOptions = {
      title,
      text: message ? this.translateService.instant(message) : null,
      icon: 'success',
      showConfirmButton: false,
      timer: 3000,
      iconColor: '#222e5e',
    };

    if (!title) {
      delete object.title;
    }
    Swal.fire(object);
  }

  warningMessage(message: string) {
    Swal.fire({
      text: message ? this.translateService.instant(message) : null,
      icon: 'warning',
      showConfirmButton: false,
      iconColor: '#FAD030',
      showCloseButton: true,
    });
  }

  infoMessage(message: string, title?: string) {
    this.optionsAlert('info', message, title);
  }

  logout() {
    return Swal.fire({
      title: '¿Estás seguro que deseas cerrar sesión?',
      showCancelButton: true,
      cancelButtonText: 'No, regresar',
      showConfirmButton: true,
      confirmButtonText: 'Sí, Salir',
      buttonsStyling: false,
    });
  }

  optionsAlert(typeMessage: SweetAlertIcon, message: string, title?: string) {
    Swal.fire({
      title: title ?? 'Vilean te informa!',
      text: this.translateService.instant(message),
      icon: typeMessage,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  commentAlert(message: string) {
    Swal.fire({
      title: '<h1>💙</h1>',
      text: message ? this.translateService.instant(message) : null,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  /**
   * This function validates the user confirm for doing an action.
   */
  confirmRevomeMessage(message: string) {
    return Swal.fire({
      text: this.translateService.instant(message),
      showCancelButton: true,
      cancelButtonText: 'No, regresar',
      showConfirmButton: true,
      confirmButtonText: 'Sí, eliminar',
      buttonsStyling: false,
    });
  }
}
