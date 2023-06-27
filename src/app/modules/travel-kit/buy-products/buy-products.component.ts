import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IProduct } from '../../products/interfaces/IProduct.interface';
import { BaseService } from 'src/app/core/services/base.service';
import { AppState } from 'src/app/store/app.reducer';
import * as cartActions from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss'],
})
export class BuyProductsComponent implements OnInit, OnDestroy {
  private baseService = inject(BaseService);
  private store = inject(Store<AppState>);

  $store!: Subscription;
  productsInList: any[] = [];
  products: any[] = [];
  // products: IProduct[] = [];

  ngOnInit(): void {
    this.baseService.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').subscribe({
      next: (response: any) => {
        this.products = response;
      },
    });
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.productsInList = response.products;
      }
    })
    // this.baseService.getMethod('product').subscribe({
    //   next: (response: any) => {
    //     this.products = response.data;
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  addProduct(product: IProduct, reference: string) {
    const existProduct = this.productsInList.find((item) => item.id === product.id);
    // const exist = this.productsInList.some((item) => item._id === product._id)
    if (existProduct) {
      const newProduct = {...existProduct};
      newProduct.amount = existProduct.amount! + 1;
      this.store.dispatch(cartActions.updateProduct({ reference, product: newProduct }));
    } else {
      product.amount = 1;
      this.store.dispatch(cartActions.addProduct({ reference, product }));
    }
  }

  /**
   * This method validates, if exists a reference in localStorage.
   * @param product Product to add to the cart.
   */
  validateReference(product: IProduct) {
    let reference = localStorage.getItem('reference');
    if (!reference) {
      reference = this.generarIdUnico();
      localStorage.setItem('reference', reference);
    }
    this.addProduct(product, reference);
  }

  generarIdUnico() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const caracteresLength = caracteres.length;
    let id = '';
  
    for (let i = 0; i < 10; i++) {
      const indice = Math.floor(Math.random() * caracteresLength);
      id += caracteres.charAt(indice);
    }
  
    const timestamp = Date.now().toString(36);
    id += '-' + timestamp;
  
    return id;
  }
  
}
