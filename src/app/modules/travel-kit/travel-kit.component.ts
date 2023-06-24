import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { DiscountSessionComponent } from './discount-session/discount-session.component';

@Component({
  selector: 'app-travel-kit',
  templateUrl: './travel-kit.component.html',
  styleUrls: ['./travel-kit.component.scss'],
  standalone: true,
  imports: [CommonModule, BuyProductsComponent, DiscountSessionComponent],
})
export default class TravelKitComponent {

}
