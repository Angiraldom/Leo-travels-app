import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitViajeroComponent } from './kit-viajero.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    component: KitViajeroComponent,
  },
  {
    path: 'view-product/:id',
    component: ViewProductComponent,
    title: 'Ver Producto',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitViajeroRoutingModule {}
