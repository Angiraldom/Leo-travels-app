import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';

export const studientGuardFn: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store<AppState>);
  
  return store.select('profile').pipe(
    take(1),
    map((user) => {
      if (user) {
        return true;
      } else {
        router.navigate(['login']);
        return false;
      }
    })
  );;
};
