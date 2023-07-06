import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoginGuardFn } from './core/guards/redirect-login.guard';
import { authGuardFn } from './core/guards/auth.guard';

const routes: Routes = [
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
    path: '',
    loadChildren: () =>
      import('./modules/page/page-routing.module').then((m) => m.PageRoutingModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
