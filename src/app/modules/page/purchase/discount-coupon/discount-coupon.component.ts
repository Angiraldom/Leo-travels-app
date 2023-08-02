import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { BaseService } from 'src/app/core/services/base.service';
import { MesaggeService } from 'src/app/core/services/message.service';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-discount-coupon',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, InputTextModule, ReactiveFormsModule],
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.scss']
})
export class DiscountCouponComponent implements OnDestroy {
  private baseService = inject(BaseService);
  private messageService = inject(MesaggeService);
  store = inject(Store<AppState>);

  coupon = new FormControl('', { validators: [Validators.required] });
  findCoupon() {
    this.baseService.getMethod('discount-coupons/' + this.coupon.value).subscribe({
      next: (res: any) => {
        if (Object.keys(res.data).length > 0) {
          this.store.dispatch(actions.setCoupon({ newCoupon: res.data }));
          this.messageService.succesMessage('succes.validCoupon');
        } else {
          this.store.dispatch(actions.clearCoupon());
          this.messageService.warningMessage('errors.invalidCoupon');
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(actions.clearCoupon());
  }

  upperCaseFormat() {
    if (this.coupon.value?.trim()) {
      const upperCase = this.coupon.value?.toUpperCase().trim();
      this.coupon.setValue(upperCase);
    }
  }
}
