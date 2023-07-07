import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kit-viajero',
    loadChildren: () =>
      import('./travel-kit/kit-viajero.module').then((m) => m.KitViajeroModule),
  },
  {
    path: 'pagar',
    loadChildren: () =>
      import('./purchase/purchase.module').then((m) => m.PurchaseModule),
  },
  {
    path: '',
    redirectTo: 'kit-viajero',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
