import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { KitViajeroRoutingModule } from './kit-viajero-routing.module';
import { KitViajeroComponent } from './kit-viajero.component';
import { DiscountSessionComponent } from './discount-session/discount-session.component';
import { BuyProductsComponent } from './buy-products/buy-products.component';
import { RecommendationSessionComponent } from './recommendation-session/recommendation-session.component';
import { DescriptionSessionComponent } from './description-session/description-session.component';
import { KitPriceSessionComponent } from './kit-price-session/kit-price-session.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideoSessionComponent } from './video-session/video-session.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    KitViajeroComponent,
    DiscountSessionComponent,
    BuyProductsComponent,
    RecommendationSessionComponent,
    DescriptionSessionComponent,
    KitPriceSessionComponent,
    GalleryComponent,
    VideoSessionComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    KitViajeroRoutingModule,
    FooterComponent,
    MenuComponent,
    GenericButtonComponent,
    SlickCarouselModule,
    PrimengModule,
    NgOptimizedImage,
    MaterialModule
  ]
})
export class KitViajeroModule { }
