import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'cursos',
        loadChildren: () =>
          import('./courses/admin-courses.module').then(
            (m) => m.AdminCoursesModule
          ),
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'transacciones',
        loadChildren: () =>
          import('./transaction/transaction.module').then(
            (m) => m.TransactionModule
          ),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./user/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'registro',
        loadChildren: () =>
          import('./potential-clients/potential-client.module').then((m) => m.PotentialClientModule),
      },
      {
        path: 'analiticas',
        loadChildren: () =>
          import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
      },
      {
        path: 'ofertas',
        loadChildren: () =>
          import('./coupons/coupons.module').then((m) => m.CouponsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
