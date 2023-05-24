import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { AppState } from 'src/app/store/app.reducer';
import { BaseService } from 'src/app/core/services/base.service';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { IProduct } from 'src/app/shopping-cart/interfaces/IProduct.interface';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  private store = inject(Store<AppState>);
  private baseService = inject(BaseService);
  private dialog = inject(MatDialog);

  products: IProduct[] = [];
  productsCart: IProduct[] = [];

  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource: any;

  ngOnInit(): void {
    this.store.select('cart').subscribe({
      next: (data: any) => {
        this.productsCart = data.products;
      },
    });
    this.getAllProducts();
  }

  getAllProducts() {
    this.baseService.getMethod('product').subscribe({
      next: (response: any) => {
        this.products = response.data;
        this.dataSource = response.data;
      },
    });
  }

  /**
   * Add products to the cart
   * @param product Product to add to the cart.
   */
  addProduct(product: IProduct, reference: string) {
    this.store.dispatch(cartActions.addProduct({ reference, product }));
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

  updateProduct(product: IProduct) {
    this.store.dispatch(
      cartActions.updateProduct({ reference: 'johnatan', product })
    );
  }

  deleteProduct(product: IProduct) {
    this.store.dispatch(
      cartActions.deleteProduct({ reference: 'johnatan', product })
    );
  }

  openModal(data?: any) {
    this.dialog.open(CreateCourseComponent, {
      data
    }).afterClosed().subscribe({
      next: ({refresh}) => {
        if (refresh) {
          this.getAllProducts();
        }
      }
    });
  }
}
