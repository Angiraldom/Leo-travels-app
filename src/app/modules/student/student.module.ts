import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { StudentViewComponent } from './student-view.component';
import { MaterialModule } from 'src/app/material/material.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { WatchClassComponent } from './watch-class/watch-class.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { TotalClassesPipe } from 'src/app/core/pipes/total-classes.pipe';
import { ClassProgressPipe } from 'src/app/core/pipes/class-progress.pipe';
import { MenuStudentComponent } from './menu-student/menu-student.component';
import { CommentsComponent } from './comments/comments.component';
import { LetterAvatarPipe } from 'src/app/core/pipes/letter-avatar.pipe';

@NgModule({
  declarations: [
    StudentViewComponent,
    ProfileComponent,
    MyCoursesComponent,
    CourseViewComponent,
    WatchClassComponent,
    SidebarUserComponent,
    MenuStudentComponent,
    CommentsComponent,
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
    ReactiveFormsModule,
    TotalClassesPipe,
    ClassProgressPipe,
    LetterAvatarPipe,
    FormsModule
  ],
})
export class StudentModule {}
