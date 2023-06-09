import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

export const redirectLoginGuardFn: CanActivateFn = () => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const token = cookieService.getValue('token');
  if (!token) {
    return true;
  }
  router.navigate(['layout']);
  return false;
};
