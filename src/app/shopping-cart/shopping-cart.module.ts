import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ListPaymentsComponent } from './list-payments/list-payments.component';



@NgModule({
  declarations: [
    PaymentsComponent,
    ThankYouPageComponent,
    ListPaymentsComponent,
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ],
  exports: []
})
export class ShoppingCartModule { }
