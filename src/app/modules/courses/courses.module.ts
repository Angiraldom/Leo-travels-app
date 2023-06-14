import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListVideosPipe } from '../../core/pipes/list-videos.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { CoursesComponent } from './courses.component';
import { FormCourseComponent } from './form-course/form-course.component';
import { FormModuleComponent } from './form-module/form-module.component';
import { FormClassComponent } from './form-class/form-class.component';


@NgModule({
  declarations: [
    ListCoursesComponent,
    CreateCourseComponent,
    ListVideosPipe,
    CoursesComponent,
    FormCourseComponent,
    FormModuleComponent,
    FormClassComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule,
    PrimengModule
  ]
})
export class CoursesModule { }
