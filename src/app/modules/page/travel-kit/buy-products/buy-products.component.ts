import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from 'src/app/modules/admin/products/interfaces/IProduct.interface';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss'],
})
export class BuyProductsComponent implements OnInit {
  protected baseService = inject(BaseService);
  @Output() onAddProduct = new EventEmitter();

  products: any[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.baseService.http.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').
    pipe(
      map((item: any) => {
        console.log(item);
        
        item['_id'] = item['id']
        return item;
      })
    )
    .subscribe({
      next: (response: any) => {
        this.products = response;
        // console.log(response);
      },
    });
    // this.baseService.getMethod('product').subscribe({
    //   next: (response: any) => {
    //     this.products = response.data;
    //   },
    // });
  }

  handleClick(product: IProduct) {
    this.onAddProduct.emit(product);
  }
}
