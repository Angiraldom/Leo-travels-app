import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';


@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    HeaderModulesComponent
  ]
})
export class AnalyticsModule { }
