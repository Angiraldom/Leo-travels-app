import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoAreWeComponent } from './who-are-we.component';

const routes: Routes = [{
  component: WhoAreWeComponent,
  path: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoAreWeRoutingModule { }
