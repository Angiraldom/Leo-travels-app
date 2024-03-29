import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../../admin/products/interfaces/IProduct.interface';
import { AppState } from 'src/app/store/app.reducer';
import { TravelKitService } from './services/travel-kit.service';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';
import { Message } from 'primeng/api';
import { KIT_VIAJERO_ID } from 'src/app/shared/constants';

@Component({
  selector: 'app-kit-viajero',
  templateUrl: './kit-viajero.component.html',
  styleUrls: ['./kit-viajero.component.scss'],
})
export class KitViajeroComponent implements OnInit, OnDestroy {
  protected baseService = inject(BaseService);
  protected travelKitService = inject(TravelKitService);
  protected store = inject(Store<AppState>);
  protected router = inject(Router);

  protected readonly idKitViajero = KIT_VIAJERO_ID;
  protected readonly idCourse = '64a04a387a31b132537ae49d';
  products: IProduct[] = [];
  productKitViajero!: IProduct | undefined;
  course!: ICourse;
  $store!: Subscription;
  productsInList: any[] = [];
  showPromotion = false;
  message: Message[] = [
    {
      severity: 'warn',
      summary:
        'Productos disponibles solo en Colombia, hasta agotar existencias',
    },
  ];

  ngOnInit(): void {
    this.getAllProducts();
    this.getCourse();
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.productsInList = response.products;
      },
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  getAllProducts() {
    this.baseService.getMethod('product').subscribe({
      next: (response: any) => {
        this.products = response.data.filter((item: any) => item._id !== this.idKitViajero);
        this.productKitViajero = response.data.find((item: any) => item._id === this.idKitViajero);
      },
    });
  }

  getTravelKit() {
    this.baseService.getMethod('product/' + this.idKitViajero).subscribe({
      next: (res: any) => {
        this.productKitViajero = res.data;
      },
    });
  }

  getCourse() {
    this.baseService.getMethod('course/getCourse/' + this.idCourse).subscribe({
      next: (res: any) => {
        this.course = res.data;
      },
    });
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
   * Add a travel kit to the cart.
   */
  addKitViajero() {
    if (!this.productKitViajero) {
      return;
    }
    this.addProductsCart(this.productKitViajero);

    if (this.validateCourseExistInCart()) {
      this.router.navigate(['pagar']);
      return;
    }
    this.showPromotion = true;
  }

  /**
   * Add the course to the cart.
   * @returns If the course doesn't exist.
   */
  addCourse() {
    if (!this.course) {
      return;
    }
    this.addProductsCart(this.course);
    this.router.navigate(['pagar']);
  }

  /**
   * This method goes to the service and to add a product to the cart.
   * @param product Value to add to the cart.
   */
  addProductsCart(product: IProduct | ICourse) {
    this.travelKitService.validateReference(product, this.productsInList);
  }

  /**
   * Validate if the course is in the cart.
   * @returns True if the course was adding to the cart.
   */
  validateCourseExistInCart() {
    return this.productsInList.some((item) => item.modules);
  }
}
