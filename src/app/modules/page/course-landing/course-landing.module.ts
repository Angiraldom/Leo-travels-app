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
import { ItsForYouChecksComponent } from './its-for-you-checks/its-for-you-checks.component';
import { LikeFotosComponent } from './like-fotos/like-fotos.component';
import { WhySectionComponent } from './why-section/why-section.component';
import {CarouselSection2Component} from "./carousel-section2/carousel-section2.component";
import { AmazingFotosComponent } from './amazing-fotos/amazing-fotos.component';
import { SecretsSectionComponent } from './secrets-section/secrets-section.component';
import { ReallyDoItComponent } from './really-do-it/really-do-it.component';
import { AsequibleSectionComponent } from './asequible-section/asequible-section.component';
import { LearningsSectionComponent } from './learnings-section/learnings-section.component';
import { AccessSectionComponent } from './access-section/access-section.component';
import { FastLearning2Component } from './fast-learning2/fast-learning2.component';
import { ActNowComponent } from './act-now/act-now.component';
import { SpoilerAlertComponent } from './spoiler-alert/spoiler-alert.component';
import { FaqComponent } from './faq/faq.component';
import { PriceSectionComponent } from './price-section/price-section.component';


@NgModule({
  declarations: [
    CourseLandingComponent,
    MainSectionComponent,
    StepsSectionComponent,
    TextInfoBuyComponent,
    InfoFotosComponent,
    BuySectionComponent,
    CarouselSectionComponent,
    CarouselSection2Component,
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
    SameMistakesComponent,
    ItsForYouChecksComponent,
    LikeFotosComponent,
    WhySectionComponent,
    AmazingFotosComponent,
    SecretsSectionComponent,
    ReallyDoItComponent,
    AsequibleSectionComponent,
    LearningsSectionComponent,
    AccessSectionComponent,
    FastLearning2Component,
    ActNowComponent,
    SpoilerAlertComponent,
    FaqComponent,
    PriceSectionComponent
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
