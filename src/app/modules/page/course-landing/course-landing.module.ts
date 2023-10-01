import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { CourseLandingRoutingModule } from './course-landing-routing.module';
import { CourseLandingComponent } from './course-landing.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { StepsSectionComponent } from './steps-section/steps-section.component';
import { TextInfoBuyComponent } from './text-info-buy/text-info-buy.component';
import { InfoFotosComponent } from './info-fotos/info-fotos.component';
import { BuySectionComponent } from './buy-section/buy-section.component';
import { CarouselSectionComponent } from './carousel-section/carousel-section.component';
import { CourseContentSectionComponent } from './course-content-section/course-content-section.component';
import { CardsComponent } from './cards/cards.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { TravelKitComponent } from './travel-kit/travel-kit.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { KitPromotionComponent } from './kit-promotion/kit-promotion.component';
import { HeaderPromotionsComponent } from 'src/app/shared/header-promotions/header-promotions.component';
import { BenefitsSessionComponent } from './benefits-session/benefits-session.component';
import { CourseValueComponent } from './course-value/course-value.component';
import { OurPurposeComponent } from './our-purpose/our-purpose.component';
import { FastLearningComponent } from './fast-learning/fast-learning.component';
import { BadThingsComponent } from './bad-things/bad-things.component';
import { TheBestOfAllComponent } from './the-best-of-all/the-best-of-all.component';
import { CompleteCourseComponent } from './complete-course/complete-course.component';
import { SameMistakesComponent } from './same-mistakes/same-mistakes.component';


@NgModule({
  declarations: [
    CourseLandingComponent,
    MainSectionComponent,
    StepsSectionComponent,
    TextInfoBuyComponent,
    InfoFotosComponent,
    BuySectionComponent,
    CarouselSectionComponent,
    CourseContentSectionComponent,
    CardsComponent,
    TravelKitComponent,
    KitPromotionComponent,
    BenefitsSessionComponent,
    CourseValueComponent,
    OurPurposeComponent,
    FastLearningComponent,
    BadThingsComponent,
    TheBestOfAllComponent,
    CompleteCourseComponent,
    SameMistakesComponent
  ],
  imports: [
    CommonModule,
    CourseLandingRoutingModule,
    GenericButtonComponent,
    SwiperModule,
    PrimengModule,
    MenuComponent,
    FooterComponent,
    MenuComponent,
    HeaderPromotionsComponent,
    NgOptimizedImage
  ]
})
export class CourseLandingModule { }
