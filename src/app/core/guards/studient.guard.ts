import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';

export const studientGuardFn: CanActivateFn = () => {
    const store = inject(Store<AppState>);

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    return store.select('profile').pipe(
      take(1),
      map((user) => {
        if (user.role === 'Cliente') {
          return true;
        } else {
          return false;
        }
      })
    );
  }
