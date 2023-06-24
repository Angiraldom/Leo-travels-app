import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { DiscountSessionComponent } from './discount-session/discount-session.component';
import { RecommendationSessionComponent } from './recommendation-session/recommendation-session.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-travel-kit',
  templateUrl: './travel-kit.component.html',
  styleUrls: ['./travel-kit.component.scss'],
  standalone: true,
  imports: [CommonModule, MenuComponent, BuyProductsComponent, DiscountSessionComponent, RecommendationSessionComponent, FooterComponent],
})
export default class TravelKitComponent {

}
