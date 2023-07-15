import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { CoursePromotionComponent } from './course-promotion/course-promotion.component';
import { KitPromotionComponent } from './kit-promotion/kit-promotion.component';

@NgModule({
  declarations: [
    CoursePromotionComponent,
    KitPromotionComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule
  ]
})
export class PageModule { }
