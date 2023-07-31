import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { FormCouponComponent } from './form-coupon/form-coupon.component';
import { CouponComponent } from './coupon.component';


@NgModule({
  declarations: [
    FormCouponComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule
  ]
})
export class CouponsModule { }
