import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from './create-product/create-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  private dialog = inject(MatDialog);
  private createModal = CreateProductComponent;

  openModal() {
    this.dialog.open(this.createModal, {
      hasBackdrop: false,
    });
  }

}
