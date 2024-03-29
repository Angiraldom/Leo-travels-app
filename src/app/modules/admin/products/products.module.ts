import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ProductsRoutingModule } from './products-routing.module';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductsComponent } from './products.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    CreateProductComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule,
    PrimengModule,
    TitleModalComponent,
    ButtonsModalComponent,
    HeaderModulesComponent
  ]
})
export class ProductsModule { }
