import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-error-transaction',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './error-transaction.component.html',
  styleUrls: ['./error-transaction.component.scss'],
})
export class ErrorTransactionComponent {
  private router = inject(Router);

  changeRoute() {
    this.router.navigate(['pagar']);
  }
}
