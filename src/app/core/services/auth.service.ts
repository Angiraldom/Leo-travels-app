import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { SweetAlertResult } from 'sweetalert2';

import { AppState } from 'src/app/store/app.reducer';
import { BaseService } from './base.service';
import { CookieService } from './cookie.service';
import { getProfile, clearProfile } from 'src/app/store/actions/user.actions';
import { clearCart } from 'src/app/store/actions/cart.actions';
import { MesaggeService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  private cookieService = inject(CookieService);
  private store = inject(Store<AppState>);
  private router = inject(Router);
  private mesaggeService = inject(MesaggeService);

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

  validateLogout() {
    this.mesaggeService.logout().then((response: SweetAlertResult) => {
      if (response.isConfirmed) {
        this.logout();
      }
    });
  }

  logout() {
    this.clearStorage();
    this.store.dispatch(clearCart());
    this.store.dispatch(clearProfile());
    this.router.navigate(['']);
  }

  clearStorage() {
    localStorage.removeItem('reference');
    localStorage.removeItem('token');
  }
}
