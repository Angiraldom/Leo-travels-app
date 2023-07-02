import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoginGuardFn } from './core/guards/redirect-login.guard';
import { authGuardFn } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'kit-viajero',
    loadChildren: () =>
      import('./modules/travel-kit/travel-kit.module').then(
        (m) => m.TravelKitModule
      ),
    title: 'Kit viajero',
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./modules/purchase/purchase.module').then(
        (m) => m.PurchaseModule
      ),
  },
  {
    path: 'layout',
    // canActivate: [authGuardFn],
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./user-layout/user-layout.module').then((m) => m.UserLayoutModule),
  },
  {
    path: 'login',
    canActivate: [redirectLoginGuardFn],
    loadComponent: () => import('./components/login/login.component'),
    title: 'Login',
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./components/forgot-password/forgot-password.component'),
    title: 'Recuperar contraseña',
  },
  {
    path: 'change-password',
    loadComponent: () =>
      import('./components/change-password/change-password.component'),
    title: 'Cambiar contraseña',
  },
  {
    path: 'response-transaction',
    loadComponent: () =>
      import('./components/thank-you-page/thank-you-page.component'),
    title: 'Agradecimiento',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
