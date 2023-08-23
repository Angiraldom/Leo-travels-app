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
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      tap((res: any) => {
        this.saveTokens(res.data);
      })
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
    this.router.navigate(['home']);
  }

  clearStorage() {
    localStorage.removeItem('reference');
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }

  refreshToken(): Observable<HttpEvent<any>> {
    const refresh_token = localStorage.getItem('refresh_token');
    return this.postMethod('auth/refresh_token', {refresh_token}).pipe(
      tap((res: any) => {
        this.saveTokens(res.data);
      })
    );
  }

  saveTokens(data: any) {
    if (!data.access_token || !data.refresh_token) {
      this.logout();
      return;
    }
    this.cookieService.setValue('token', data.access_token);
    this.cookieService.setValue('refresh_token', data.refresh_token);
  }
}
