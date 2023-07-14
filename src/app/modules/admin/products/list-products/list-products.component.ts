import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../interfaces/IProduct.interface';
import { CreateProductComponent } from '../create-product/create-product.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit, OnDestroy {
  private baseService = inject(BaseService);
  private dialog = inject(MatDialog);
  private createModal = CreateProductComponent;

  products: IProduct[] = [];
  $dialog!: Subscription;

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  dataSource: any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
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

  openModal(data: IProduct) {
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
}
