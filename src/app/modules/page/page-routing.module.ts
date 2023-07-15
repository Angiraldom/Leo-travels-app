import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: () =>
      import('./course-landing/course-landing.module').then((m) => m.CourseLandingModule),
  },
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
    path:'home',
    loadChildren:() =>
    import('./home/home.module').then((m)=> m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
