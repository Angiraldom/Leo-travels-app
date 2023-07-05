import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product.component';

const routes: Routes = [
  {
    path: 'ver/:id',
    component: ViewProductComponent,
    title: 'Ver Producto',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProductRoutingModule {}
