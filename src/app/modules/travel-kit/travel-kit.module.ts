import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TravelKitRoutingModule } from './travel-kit-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MenuComponent } from '../../shared/menu/menu.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';
import { TotalProductsPipe } from 'src/app/core/pipes/total-products.pipe';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import TravelKitComponent from './travel-kit.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DiscountSessionComponent } from './discount-session/discount-session.component';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { RecommendationSessionComponent } from './recommendation-session/recommendation-session.component';


@NgModule({
  declarations: [
    TravelKitComponent,
    DiscountSessionComponent,
    BuyProductsComponent,
    RecommendationSessionComponent
  ],
  imports: [
    CommonModule,
    TravelKitRoutingModule,
    MaterialModule,
    PrimengModule,
    FooterComponent,
    GenericButtonComponent,
    MenuComponent,
    TotalValuePipe,
    TotalProductsPipe,
    NgOptimizedImage
  ]
})
export class TravelKitModule { }
