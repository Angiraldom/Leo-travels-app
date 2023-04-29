import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { BaseService } from 'src/app/core/services/base.service';
import * as cartActions from 'src/app/shared/redux/cart/cart.actions';
import { IProduct } from 'src/app/shopping-cart/interfaces/IProduct.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: IProduct[] = [];

  constructor(
    private store: Store<AppState>,
    private baseService: BaseService) { }

  ngOnInit(): void {
    this.baseService.getMethod('').subscribe({
      next: (response: any) => {
        this.products = response;
      },
    })
  }

  /**
   * Add products to the cart
   * @param product Product to add to the cart.
   */
  addProduct(product: IProduct) {
    this.store.dispatch(cartActions.addProduct({ product }))
  }
}
