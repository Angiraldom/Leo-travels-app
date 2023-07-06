import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'cursos',
      loadChildren: () =>
        import('./courses/admin-courses.module').then((m) => m.AdminCoursesModule),
    },
    {
      path: 'productos',
      loadChildren: () =>
        import('./products/products.module').then((m) => m.ProductsModule),
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
