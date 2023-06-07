import { Injectable, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BaseService } from 'src/app/core/services/base.service';
import { CookieService } from 'src/app/core/services/cookie.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  private cookieService = inject(CookieService);
  constructor() {
    super();
  }

  login(body: { email: string; password: string }) {
    return this.postMethod('auth/login', body).pipe(
      tap((res: any) => this.cookieService.setValue('user', res.data))
    );
  }
}
