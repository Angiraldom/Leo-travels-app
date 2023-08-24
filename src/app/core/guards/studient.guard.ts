import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

import { AppState } from 'src/app/store/app.reducer';
import { AuthService } from '../services/auth.service';

export const studientGuardFn: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');
  const store = inject(Store<AppState>);
  const authService = inject(AuthService);

  if (!token) {
    router.navigate(['login']);
    return false;
  }

  return store.select('profile').pipe(
    take(1),
    map((user) => {
      if (Object.hasOwn(user, 'name')) {
        return true;
      } else {
        authService.logout();
        router.navigate(['login']);
        return false;
      }
    })
  );
};

