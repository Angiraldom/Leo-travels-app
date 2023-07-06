import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentViewComponent } from './student-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { WatchClassComponent } from './watch-class/watch-class.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@NgModule({
  declarations: [
    StudentViewComponent,
    ProfileComponent,
    MyCoursesComponent,
    CourseViewComponent,
    WatchClassComponent,
    SidebarUserComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    PrimengModule,
    RouterModule,
    HeaderModulesComponent,
    GenericButtonComponent,
    SidebarComponent,
    NavbarComponent,
    ReactiveFormsModule
  ],
})
export class StudentModule {}
