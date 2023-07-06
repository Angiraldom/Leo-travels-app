import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'courses',
        // canActivate: [authGuardFn],
        loadChildren: () =>
          import('../courses/courses.module').then((m) => m.CoursesModule),
      },
      {
        path: 'products',
        // canActivate: [authGuardFn],
        loadChildren: () =>
          import('../products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'transactions', 
        // canActivate: [authGuardFn],
        loadChildren: () =>
          import('../transaction/transaction.module').then((m) => m.TransactionModule),
      },
      {
        path: 'users', 
        // canActivate: [authGuardFn],
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
