import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { WatchClassComponent } from './watch-class/watch-class.component';
import { StudentViewComponent } from './student-view.component';

const routes: Routes = [
  {
    path: 'clase/:idCourse/:idModule/:idClass',
    component: WatchClassComponent,
    title: 'Clase'
  },
  {
    path: '',
    component: StudentViewComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Prefil'
      },
      {
        path: 'my-courses',
        component: MyCoursesComponent,
        title: 'Mis cursos'
      },
      {
        path: 'course/:id',
        component: CourseViewComponent,
        title: 'Curso'
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
      },
    ],
  },
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
