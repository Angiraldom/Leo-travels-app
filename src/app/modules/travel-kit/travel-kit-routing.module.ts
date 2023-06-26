import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TravelKitComponent from './travel-kit.component';

const routes: Routes = [{
  path: '',
  component: TravelKitComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelKitRoutingModule { }
