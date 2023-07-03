import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class LayoutModule { }
