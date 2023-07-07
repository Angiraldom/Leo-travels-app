import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent } from './invoice/invoice.component';
import { DiscountCouponComponent } from './discount-coupon/discount-coupon.component';
import { PaymentButtonComponent } from './payment-button/payment-button.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { GratitudeCourseComponent } from './gratitude-course/gratitude-course.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { GratitudeKitComponent } from './gratitude-kit/gratitude-kit.component';


@NgModule({
  declarations: [
    PurchaseComponent,
    InvoiceFormComponent,
    GratitudeCourseComponent,
    GratitudeKitComponent
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
    ShippingFormComponent,
    FooterComponent
  ]
})
export class PurchaseModule { }
