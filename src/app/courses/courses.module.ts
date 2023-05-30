import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListVideosPipe } from '../core/pipes/list-videos.pipe';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ListCoursesComponent,
    CreateCourseComponent,
    ListVideosPipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class CoursesModule { }
