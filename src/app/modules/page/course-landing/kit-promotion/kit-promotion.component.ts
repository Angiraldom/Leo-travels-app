import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kit-promotion',
  templateUrl: './kit-promotion.component.html',
  styleUrls: ['./kit-promotion.component.scss']
})
export class KitPromotionComponent {
  private router = inject(Router);
  @Output() onAddTravelKit = new EventEmitter();

  addTravelKit() {
    this.onAddTravelKit.emit();
  }

  changeRoute() {
    this.router.navigate(['pagar']);
  }
}
