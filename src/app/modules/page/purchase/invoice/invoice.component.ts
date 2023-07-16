import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppState } from 'src/app/store/app.reducer';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';
import { FinalPricePipe } from 'src/app/core/pipes/final-price.pipe';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, TotalValuePipe, FinalPricePipe, MatTooltipModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent {
  store = inject(Store<AppState>);
}
