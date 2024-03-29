import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'response-transaction/:buy-course',
    loadComponent: () =>
      import('./response-transaction/response-transaction.component'),
  },
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
    path:'inicio',
    loadChildren:() =>
    import('./home/home.module').then((m)=> m.HomeModule)
  },
  {
    path:'',
    loadChildren:() =>
      import('./home/home.module').then((m)=> m.HomeModule)
  },
  {
    path:'quienes-somos',
    loadChildren:() =>
    import('./who-are-we/who-are-we.module').then((m) => m.WhoAreWeModule)
  },
  {
    path: 'clase-gratis',
    loadComponent: () =>
      import('./free-class/free-class.component'),
  },
  {
    path: 'ver-clase-gratis',
    loadComponent: () =>
      import('./watch-free-class/watch-free-class.component'),
  },
  {
    path: 'ver-clase-gratis-z',
    loadComponent: () =>
      import('./watch-free-class-z/watch-free-class-z.component'),
  },
  {
    path: 'login',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
