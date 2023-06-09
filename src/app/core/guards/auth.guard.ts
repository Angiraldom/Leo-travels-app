import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

export const authGuardFn: CanActivateFn = () => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const token = cookieService.getValue('token');
  if (!token) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
