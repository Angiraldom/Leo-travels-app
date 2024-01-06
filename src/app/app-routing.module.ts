import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoginGuardFn } from './core/guards/redirect-login.guard';
import { adminGuardFn } from './core/guards/admin.guard';
import { studientGuardFn } from './core/guards/studient.guard';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    canActivate: [redirectLoginGuardFn],
    loadComponent: () => import('./components/login/login.component'),
    title: 'Iniciar sesión',
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
    path: 'politicas-privacidad',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy.component'),
    title: 'Políticas de privacidad',
  },
  {
    path: 'politicas-cookies',
    loadComponent: () =>
      import('./components/cookies-policy/cookies-policy.component'),
    title: 'Políticas de cookies',
  },
  {
    path: 'aviso-legal',
    loadComponent: () =>
      import('./components/legal-warning/legal-warning.component'),
    title: 'Aviso legal',
  },
  {
    path: 'terminos-condiciones',
    loadComponent: () =>
      import('./components/terms-and-conditions/terms-and-conditions.component'),
    title: 'Términos y condiciones',
  },
  {
    path: 'tratamiento-datos',
    loadComponent: () =>
      import('./components/data-treatment/data-treatment.component'),
    title: 'Tratamiento de datos',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/page/page-routing.module').then((m) => m.PageRoutingModule),
  },
  {
    path: 'admin',
    canActivate: [adminGuardFn],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'estudiante',
    canActivate: [studientGuardFn],
    loadChildren: () =>
      import('./modules/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'login',
    redirectTo: 'iniciar-sesion',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
