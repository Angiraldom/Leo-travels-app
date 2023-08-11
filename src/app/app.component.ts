import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from 'rxjs';

import { BaseService } from './core/services/base.service';
import { AppState } from './store/app.reducer';
import { initCart } from './store/actions/cart.actions';
import { AuthService } from './core/services/auth.service';
import { CookiesWindowComponent } from './components/cookies-window/cookies-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'leo-travels-app';
  messageCookies = false;
  $dialog!: Subscription;

  constructor(
    private store: Store<AppState>,
    private baseService: BaseService,
    private authService : AuthService,
    private dialog: MatDialog,
    translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    this.validateReference();
    this.validateUser();
    this.ValidateCookies();
  }
  
  ngOnDestroy(): void {
    if (this.$dialog) {
      this.$dialog.unsubscribe();
    }
  }

  validateUser() {
    let token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    this.authService.getProfile().subscribe();
  }

  validateReference() {
    let reference = localStorage.getItem('reference');
    if (!reference) {
      return;
    }
    this.getProductsRedis(reference);
  }

  getProductsRedis(reference: string) {
    this.baseService.getMethod('payments/getProducts/' + reference).subscribe({
      next: (res: any) => {
        if (res) {
          this.store.dispatch(initCart({ products: res['products'], reference: res['reference'] }))
        } else {
          localStorage.removeItem('reference');
        }
      }
    });
  }

  ValidateCookies() {
    const showModal = localStorage.getItem('showModal');
    if (!showModal) {
      this.openModal();
      return;
    }
  }

  openModal(isConfiguring = false) {
    this.messageCookies = false;
    this.$dialog = this.dialog.open(CookiesWindowComponent, {
      width: '600px',
      data: { 
         isConfiguring
      },
    }).afterClosed().subscribe({
      next: ({ messageCookies }) => {
        this.messageCookies = messageCookies;
      }
    });
  }

  setCookieslocalStorage() {
    localStorage.setItem('showModal', 'true');
    this.messageCookies = false;
  }
}
