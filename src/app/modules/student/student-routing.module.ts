import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { WatchClassComponent } from './watch-class/watch-class.component';
import { StudentViewComponent } from './student-view.component';

const routes: Routes = [
  {
    path: 'clase/:idModule/:idCourse/:idClass',
    component: WatchClassComponent,
  },
  {
    path: '',
    component: StudentViewComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
      },
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
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
