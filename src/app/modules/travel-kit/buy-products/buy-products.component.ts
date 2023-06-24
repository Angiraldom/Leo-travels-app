import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { IProduct } from '../../products/interfaces/IProduct.interface';
import { BaseService } from 'src/app/core/services/base.service';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { AppState } from 'src/app/store/app.reducer';
import * as cartActions from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss'],
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, NgOptimizedImage, MatTooltipModule],
})
export class BuyProductsComponent implements OnInit {
  private baseService = inject(BaseService);
  private store = inject(Store<AppState>);
  
  products: any[] = [];
  // products: IProduct[] = [];

  ngOnInit(): void {
    this.baseService.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.products = response;
      },
    });
    // this.baseService.getMethod('product').subscribe({
    //   next: (response: any) => {
    //     this.products = response.data;
    //   },
    // });
  }

  addProduct(product: IProduct) {
    this.store.dispatch(cartActions.addProduct({ reference: '456', product }))
  }
}
