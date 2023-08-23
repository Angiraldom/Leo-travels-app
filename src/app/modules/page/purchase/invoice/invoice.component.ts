import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppState } from 'src/app/store/app.reducer';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';
import { FinalPricePipe } from 'src/app/core/pipes/final-price.pipe';
import { CalculateDiscountPipe } from 'src/app/core/pipes/calculate-discount.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { setShippingPrice } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, TotalValuePipe, FinalPricePipe, CalculateDiscountPipe, MatTooltipModule, ReactiveFormsModule],
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  totalValue = new FormControl(0);
  $valueForm!: Subscription;
  @Output() emitTotalValue = new EventEmitter();

  ngOnInit(): void {
    this.store.dispatch(setShippingPrice({ shippingPrice: 0 }));
    this.$valueForm = this.totalValue.valueChanges
    .pipe(
      distinctUntilChanged()
    )
    .subscribe((value) => {
      this.emitTotalValue.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.$valueForm.unsubscribe();
    this.store.dispatch(setShippingPrice({ shippingPrice: 0 }));
  }
}
