import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoginGuardFn } from './core/guards/redirect-login.guard';
import { authGuardFn } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [redirectLoginGuardFn],
    loadComponent: () => import('./components/login/login.component'),
    title: 'Login',
  },
  {
    path: 'layout',
    canActivate: [authGuardFn],
    loadChildren: () =>
      import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./components/forgot-password/forgot-password.component'),
    title: 'Olvidar contraseña'
  },
  {
    path: 'change-password',
    loadComponent: () => import('./components/change-password/change-password.component'),
    title: 'Cambiar contraseña'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
