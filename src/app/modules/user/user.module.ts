import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserRoutingModule } from './user-routing.module';
import { HeaderModulesComponent } from "../../shared/header-modules/header-modules.component";
import { MaterialModule } from 'src/app/material/material.module';



@NgModule({
    declarations: [
        UserComponent,
        ListUsersComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        HeaderModulesComponent,
        MaterialModule
    ]
})
export class UserModule { }
