import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from 'primeng/api';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from 'src/app/modules/admin/products/interfaces/IProduct.interface';
import { TravelKitService } from '../services/travel-kit.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  router = inject(Router);
  private route = inject(ActivatedRoute);
  private baseService = inject(BaseService);
  private travelKitService = inject(TravelKitService);
  protected readonly idKitViajero = '64a75cd97a31b132537ae59a';
  
  products: IProduct[] = [];
  visibleProducts: IProduct[] = [];
  viewProduct!: IProduct;
  responsiveOptions = [
    {
      breakpoint: '3000px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1000px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '800px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  responsiveOptionsViewProduct = [
    {
      breakpoint: '1200px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  id!: string;
  $storeViewProducts!: Subscription;
  $store!: Subscription;
  productsInList: IProduct[] = [];
  message: Message[] = [
    {
      severity: 'warn',
      summary:
        'Los productos físicos solo están disponibles para envío en Colombia',
    },
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') as string;
      if (this.id) {
        this.getAllProducts();
      }
    });
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.productsInList = response.products;
      },
    });
  }
  ngOnDestroy(): void {
    this.$storeViewProducts.unsubscribe();
    this.$store.unsubscribe();
  }

  getAllProducts() {
    this.$storeViewProducts = this.baseService.getMethod('product').subscribe({
      next: (response: any) => {
        this.products = response.data?.filter((product: IProduct) => product._id !== this.idKitViajero);
        this.visibleProducts = this.products.filter(
          (product) => product._id !== this.id
        );
        if (this.products.length > 0) {
          this.viewProduct = this.products.find(
            (elem) => elem._id === this.id
          )!;
        }
      },
    });
  }

  changeRoute(item: IProduct) {
    this.id = item._id!;
    this.viewProduct = this.products.find((elem) => elem._id == item._id)!;
    this.visibleProducts = this.products.filter((p) => p._id !== this.id);
    this.router.navigate([`kit-viajero/view-product/${item._id}`]);
  }

  /**
   * Add a product in the cart. One by one.
   * @param product Product that will be to add the cart.
   */
  addProduct(product: IProduct) {
    if (!product) {
      return;
    }
    this.addProductsCart(product);
  }

  /**
   * This method goes to the service and to add a product to the cart.
   * @param product Value to add to the cart.
   */
  addProductsCart(product: IProduct) {
    this.travelKitService.validateReference(product, this.productsInList);
  }
}
