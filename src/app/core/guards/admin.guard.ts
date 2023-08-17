import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

export const adminGuardFn: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store<AppState>);

  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['login']);
    return false;
  }

  return store.select('profile').pipe(
    take(1),
    map((user) => {
      if (user.role === 'Admin') {
        return true;
      } else {
        router.navigate(['login']);
        return false;
      }
    })
  );
};
