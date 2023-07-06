import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCoursesRoutingModule } from './admin-courses-routing.module';
import { CoursesComponent } from './courses.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormModuleComponent } from './form-module/form-module.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormCourseComponent } from './form-course/form-course.component';
import { FormClassComponent } from './form-class/form-class.component';


@NgModule({
  declarations: [
    CoursesComponent,
    ListCoursesComponent,
    CreateCourseComponent,
    FormModuleComponent,
    FormCourseComponent,
    FormClassComponent
  ],
  imports: [
    CommonModule,
    AdminCoursesRoutingModule,
    HeaderModulesComponent,
    TitleModalComponent,
    ButtonsModalComponent,
    MaterialModule,
    PrimengModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AdminCoursesModule { }
