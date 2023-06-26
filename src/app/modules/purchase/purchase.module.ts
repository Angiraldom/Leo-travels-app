import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { MenuComponent } from '../../shared/menu/menu.component';
import { DiscountCouponComponent } from './discount-coupon/discount-coupon.component';
import { PaymentButtonComponent } from './payment-button/payment-button.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';


@NgModule({
  declarations: [
    PurchaseComponent,
    InvoiceFormComponent
  ],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    PrimengModule,
    ReactiveFormsModule,
    InvoiceComponent,
    MenuComponent,
    DiscountCouponComponent,
    PaymentButtonComponent,
    ShippingFormComponent
  ]
})
export class PurchaseModule { }
