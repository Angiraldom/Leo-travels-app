import { Component, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../../admin/products/interfaces/IProduct.interface';
import { AppState } from 'src/app/store/app.reducer';
import { TravelKitService } from './services/travel-kit.service';

@Component({
  selector: 'app-kit-viajero',
  templateUrl: './kit-viajero.component.html',
  styleUrls: ['./kit-viajero.component.scss']
})
export class KitViajeroComponent implements OnInit {

  protected baseService = inject(BaseService);
  protected travelKitService = inject(TravelKitService);
  protected store = inject(Store<AppState>);
  
  private readonly idKitViajero = '64a75cd97a31b132537ae59a';
  product!: IProduct;
  $store!: Subscription;
  productsInList: any[] = [];

  ngOnInit(): void {
    this.getTravelKit();
  }

  getTravelKit() {
    this.baseService.getMethod('product/' + this.idKitViajero).subscribe({
      next: (res: any) => {
        this.product = res.data;
      }
    });
  }
  
  addProduct(product = this.product) {
    if (!product) {
      return;
    }
    this.travelKitService.validateReference(product, this.productsInList);
  }
}
