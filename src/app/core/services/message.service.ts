import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MesaggeService {

  // private translateService = inject(TranslateService);

  errorMessage(error: string) {
    Swal.fire({
      title: 'Error!',
      text: error,
      icon: 'error',
    });
  }
}
