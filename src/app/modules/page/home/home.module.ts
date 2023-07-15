import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations:[HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FooterComponent,
    MenuComponent,
    GenericButtonComponent,
    SlickCarouselModule,
    PrimengModule,
    NgOptimizedImage,
    MaterialModule
  ]
})
export class HomeModule { }
