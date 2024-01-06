import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studientGuardFn: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['iniciar-sesion']);
    return false;
  }
  return true;
};
