import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { AppState } from 'src/app/store/app.reducer';
import { BaseService } from 'src/app/core/services/base.service';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { IProduct } from '../interfaces/IProduct.interface';

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

  openModal(data?: IProduct) {
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
