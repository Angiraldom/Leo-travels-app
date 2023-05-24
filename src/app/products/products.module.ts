import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ListVideosPipe } from './pipes/list-videos.pipe';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ListProductsComponent,
    CreateCourseComponent,
    ListVideosPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ProductsModule { }
