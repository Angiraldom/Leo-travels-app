import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLandingComponent } from './course-landing.component';

const routes: Routes = [{
  path: '',
  component: CourseLandingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseLandingRoutingModule { }
