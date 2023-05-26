import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProduct } from 'src/app/products/interfaces/IProduct.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  private store = inject(Store<AppState>);
  private baseService = inject(BaseService);

  products: IProduct[] = [];

  ngOnInit(): void {
    this.baseService.getMethod('product/listProducts').subscribe({
      next: (response: any) => {
        this.products = response.data;
      },
    });
  }

  /**
   * This method validates, if exists a reference in localStorage.
   * @param product Product to add to the cart.
   */
  validateReference(product: IProduct) {
    let reference = localStorage.getItem('reference');
    if (!reference) {
      reference = new Date().getTime().toString();
      localStorage.setItem('reference', reference);
    }
    this.addProduct(product, reference);
  }

  /**
   * Add products to the cart
   * @param product Product to add to the cart.
   */
  addProduct(product: IProduct, reference: string) {
    this.store.dispatch(cartActions.addProduct({ reference, product }));
  }
}
