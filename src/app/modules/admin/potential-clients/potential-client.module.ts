import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { PotentialClientComponent } from './potential-client.component';
import { PotentialClientRoutingModule } from './potential-client-routing.module';

@NgModule({
  declarations: [
    PotentialClientComponent
  ],
  imports: [
    CommonModule,
    PotentialClientRoutingModule,
    HeaderModulesComponent, 
    MaterialModule,
  ]
})
export class PotentialClientModule { }
