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
  productsCart: IProduct[] = [];

  constructor(
    private store: Store<AppState>,
    private baseService: BaseService) { }

  ngOnInit(): void {
    this.store.select('products').subscribe({
      next: (products: any) => {
        console.log(products);
        this.productsCart = products;
      }
    })
    // this.baseService.getMethod('').subscribe({
    //   next: (response: any) => {
    //     this.products = response;
    //   },
    // });
  }

  /**
   * Add products to the cart
   * @param product Product to add to the cart.
   */
  addProduct(product: IProduct, reference: string) {
    this.store.dispatch(cartActions.addProduct({ product }));
    this.saveProductsInBd(reference);
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

  saveProductsInBd(reference: string) {
    const body = { reference, products: this.productsCart };
    this.baseService.postMethod('payments/saveProduct', body).subscribe({
      next: (res: any) => {
        this.getProductsRedis(res['reference']);
      }
    });
  }

  getProductsRedis(reference: string) {
    this.baseService.getMethod('payments/getProducts/' + reference).subscribe({
      next: (res) => {
        console.log(res);
      }
    });
  }
}
