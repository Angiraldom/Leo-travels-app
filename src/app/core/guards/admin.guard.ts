import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

export const adminGuardFn: CanActivateFn = () => {
    const store = inject(Store<AppState>);

    return store.select('profile').pipe(
      take(1),
      map((user) => {
        if (user.role === 'Admin') {
          return true;
        } else {
          return false;
        }
      })
    );
  }
