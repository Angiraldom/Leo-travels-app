import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { MaterialModule } from '../material/material.module';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { HeaderModulesComponent } from '../shared/header-modules/header-modules.component';
import { GenericButtonComponent } from '../shared/generic-button/generic-button.component';
import { PrimengModule } from '../primeng/primeng.module';
import { CourseViewComponent } from './course-view/course-view.component';
import { WatchClassComponent } from './watch-class/watch-class.component';
import { LayoutModule } from '../modules/layout/layout.module';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    ProfileComponent,
    MyCoursesComponent,
    CourseViewComponent,
    WatchClassComponent,
    SidebarUserComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    MaterialModule,
    PrimengModule,
    RouterModule,
    HeaderModulesComponent,
    GenericButtonComponent,
    LayoutModule
  ]
})
export class UserLayoutModule { }
