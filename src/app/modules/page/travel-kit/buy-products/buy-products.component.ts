import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/modules/admin/products/interfaces/IProduct.interface';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss'],
})
export class BuyProductsComponent {
  @Output() onAddProduct = new EventEmitter();
  @Input() products: IProduct[] = [];

  handleClick(product: IProduct) {
    this.onAddProduct.emit(product);
  }
}
