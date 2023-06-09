import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import { BaseService } from './base.service';
import { CookieService } from './cookie.service';
import { getProfile } from 'src/app/store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  private cookieService = inject(CookieService);
  private store = inject(Store<AppState>);
  constructor() {
    super();
  }

  login(body: { email: string; password: string }) {
    return this.postMethod('auth/login', body).pipe(
      tap((res: any) => this.cookieService.setValue('token', res.data.access_token))
    );
  }

  getProfile() {
    return this.getMethod('user/getProfile').pipe(
      tap((res: any) => this.store.dispatch(getProfile({ user: res.data })))
    );
  }
}
