import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPromotionsComponent } from 'src/app/shared/header-promotions/header-promotions.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-error-transaction',
  standalone: true,
  imports: [CommonModule, HeaderPromotionsComponent, FooterComponent],
  templateUrl: './error-transaction.component.html',
  styleUrls: ['./error-transaction.component.scss'],
})
export class ErrorTransactionComponent {}
