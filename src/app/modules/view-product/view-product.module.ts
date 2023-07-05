import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { MenuComponent } from '../../shared/menu/menu.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';
import { TotalProductsPipe } from 'src/app/core/pipes/total-products.pipe';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ViewProductComponent } from './view-product.component';
import { ViewProductRoutingModule } from './view-product-routing.module';
import {CarouselModule } from 'primeng/carousel';
import { MessageService } from 'primeng/api';
import {MessagesModule} from 'primeng/messages';



@NgModule({
  declarations: [
    ViewProductComponent
  ],
  imports: [
    ViewProductRoutingModule,
    CommonModule,
    MaterialModule,
    PrimengModule,
    FooterComponent,
    GenericButtonComponent,
    MenuComponent,
    TotalValuePipe,
    TotalProductsPipe,
    NgOptimizedImage,
    CarouselModule,
    MessagesModule
  ],
  providers:[MessageService]
})
export class ViewProductModule { }
