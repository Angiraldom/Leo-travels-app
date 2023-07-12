import { Component, OnInit } from '@angular/core';
import { KitViajeroComponent } from '../travel-kit/kit-viajero.component';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.component.html',
  styleUrls: ['./course-landing.component.scss'],
})
export class CourseLandingComponent
  extends KitViajeroComponent
  implements OnInit
{
  override ngOnInit(): void {
    this.getTravelKit();
    this.getCourse();
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.productsInList = response.products;
      },
    });
  }

  validateCourseAndAddInCart() {
    if (this.validateCourseExistInCart()) {
      // Mostrar alerta de que ya esta el curso agregado.
      return;
    }
    if (!this.course) {
      return
    }
    this.addProductsCart(this.course);
    this.showPromotion = true;
  }

  addKit() {
    if (!this.product) {
      return;
    }
    this.addProductsCart(this.product);
    this.router.navigate(['pagar']);
  }
}
