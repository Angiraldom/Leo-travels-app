import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './user-layout.component';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { WatchClassComponent } from './watch-class/watch-class.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'my-courses',
        component: MyCoursesComponent,
      },
      {
        path: 'course/:id',
        component: CourseViewComponent,
      },
    ],
  },
  {
    path: 'class/:idModule/:idCourse/:idClass',
    component: WatchClassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserLayoutRoutingModule {}
