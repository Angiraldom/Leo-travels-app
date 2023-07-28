import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SweetAlertResult } from 'sweetalert2';

import { CreateProductComponent } from './create-product/create-product.component';
import { BaseClass } from 'src/app/core/base.class';
import { KIT_VIAJERO_ID } from 'src/app/shared/constants';
import { IProduct } from './interfaces/IProduct.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseClass implements OnInit, OnDestroy {
  private createModal = CreateProductComponent;

  products: IProduct[] = [];
  $dialog!: Subscription;
  readonly idKitViajero = KIT_VIAJERO_ID;

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource: any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    if (!this.$dialog) {
      return;
    }
    this.$dialog.unsubscribe();
  }

  getAllProducts() {
    this.baseService.getMethod('product').subscribe({
      next: (response: any) => {
        this.products = response.data;
        this.dataSource = response.data;
      },
    });
  }

  openModal(data?: IProduct) {
    this.$dialog = this.dialog.open(this.createModal, {
      hasBackdrop: false,
      data
    }).afterClosed().subscribe({
      next: ({ refresh }) => {
        if (refresh) {
          this.getAllProducts();
        }
      }
    });
  }

  confirmRemoveProduct(product: IProduct) {
    this.messageService.confirmRevomeMessage('info.confirmRemove').then((response: SweetAlertResult) => {
      if (response.isConfirmed) {
        this.removeProduct(product);
      }
    });
  }

  removeProduct(product: IProduct) {
    this.baseService.deleteMethod('product/' + product._id).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.succesRemove');
        this.getAllProducts();
      },
    });
  }

}
