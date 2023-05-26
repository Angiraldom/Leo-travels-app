import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsComponent } from './payments/payments.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  {
    path: 'response-transaction',
    component: ThankYouPageComponent,
  },
  {
    path: 'payment',
    component: PaymentsComponent,
  },
  {
    path: '',
    component: ShoppingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}
