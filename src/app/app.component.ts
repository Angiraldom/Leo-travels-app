import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from './core/services/base.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { initCart } from './store/actions/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'leo-travels-app';

  constructor(
    private store: Store<AppState>,
    private baseService: BaseService,
    translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    this.validateReference();
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
}
