import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    HeaderModulesComponent
  ]
})
export class UsersModule { }
