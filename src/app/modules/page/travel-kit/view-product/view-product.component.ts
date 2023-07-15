import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message } from 'primeng/api';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

import { AppState } from 'src/app/store/app.reducer';
import { BaseService } from 'src/app/core/services/base.service';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { IProduct } from 'src/app/modules/admin/products/interfaces/IProduct.interface';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.spec.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  router = inject(Router);
  private route = inject(ActivatedRoute);
  private baseService = inject(BaseService);
  products: IProduct[] = [];
  visibleProducts: IProduct[] = [];
  viewProduct!: IProduct;
  responsiveOptions = [
    {
      breakpoint: '8000px',
      numVisible: 5,
      numScroll: 1,
    },
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
  isScreenWide = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') as string;
      if (this.id) {
        this.$storeViewProducts = this.baseService.getMethod('product')
          .subscribe({
            next: (response: any) => {
              this.products = response;
              this.visibleProducts = this.products.filter(
                (product) => Number(product._id) !== Number(this.id)
              );
              if (this.products.length) {
                this.viewProduct = this.products.find(
                  (elem) => Number(elem._id) == Number(this.id)
                )!;
              }
            },
          });
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

  changeRoute(item: IProduct) {
    this.id = item._id!;
    this.viewProduct = this.products.find((elem) => elem._id == item._id)!;
    this.visibleProducts = this.products.filter((p) => p._id !== this.id);
    this.router.navigate([`view-product/${item._id}`]);
    // this.changeDetectorRef.markForCheck();
    // this.changeDetectorRef.detectChanges();
  }

  addProduct(product: IProduct, reference: string) {
    const existProduct = this.productsInList.find(
      (item) => item._id === product._id
    );

    // const exist = this.productsInList.some((item) => item._id === product._id)
    if (existProduct) {
      const newProduct = { ...existProduct };
      newProduct.amount = existProduct.amount! + 1;
      this.store.dispatch(
        cartActions.updateProduct({ reference, product: newProduct })
      );
    } else {
      if (!product.hasOwnProperty('amount')) {
        product = Object.assign({}, product, { amount: 1 });
      }
      this.store.dispatch(cartActions.addProduct({ reference, product }));
    }
  }

  /**
   * This method validates, if exists a reference in localStorage.
   * @param product Product to add to the cart.
   */
  validateReference(product: IProduct) {
    let reference = localStorage.getItem('reference');
    if (!reference) {
      reference = this.generarIdUnico();
      localStorage.setItem('reference', reference);
    }
    this.addProduct(product, reference);
  }

  generarIdUnico() {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const caracteresLength = caracteres.length;
    let id = '';

    for (let i = 0; i < 10; i++) {
      const indice = Math.floor(Math.random() * caracteresLength);
      id += caracteres.charAt(indice);
    }

    const timestamp = Date.now().toString(36);
    id += '-' + timestamp;

    return id;
  }
}
