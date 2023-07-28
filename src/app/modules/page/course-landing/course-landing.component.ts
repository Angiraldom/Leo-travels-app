import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { KitViajeroComponent } from '../travel-kit/kit-viajero.component';
import { MesaggeService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-course-landing',
  templateUrl: './course-landing.component.html',
  styleUrls: ['./course-landing.component.scss'],
})
export class CourseLandingComponent
  extends KitViajeroComponent
  implements OnInit, OnDestroy
{
  private mesaggeService = inject(MesaggeService);

  override ngOnInit(): void {
    this.getTravelKit();
    this.getCourse();
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.productsInList = response.products;
      },
    });
  }

  override ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  validateCourseAndAddInCart() {
    if (this.validateCourseExistInCart()) {
      this.mesaggeService.warningMessage('Ya fue añadido al carrito.')
      return;
    }
    if (!this.course) {
      return
    }
    this.addProductsCart(this.course);
    this.showPromotion = true;
  }

  addKit() {
    if (!this.productKitViajero) {
      return;
    }
    this.addProductsCart(this.productKitViajero);
    this.router.navigate(['pagar']);
  }
}
