import { Component, OnDestroy, OnInit } from '@angular/core';

import { KitViajeroComponent } from '../kit-viajero.component';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss'],
})
export class BuyProductsComponent extends KitViajeroComponent implements OnInit, OnDestroy {
  products: any[] = [];

  override ngOnInit(): void {
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.productsInList = response.products;
      }
    });
    this.getProducts();
    // this.baseService.getMethod('product').subscribe({
    //   next: (response: any) => {
    //     this.products = response.data;
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe(); 
  }

  getProducts() {
    this.baseService.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').subscribe({
      next: (response: any) => {
        this.products = response;
      },
    });
  }
}
