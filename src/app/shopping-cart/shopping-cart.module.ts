import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    PaymentsComponent,
    ThankYouPageComponent,
    ListPaymentsComponent,
    ShoppingComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class ShoppingCartModule { }
