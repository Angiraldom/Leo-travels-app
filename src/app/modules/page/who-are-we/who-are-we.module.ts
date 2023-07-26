import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoAreWeRoutingModule } from './who-are-we-routing.module';
import { WhoAreWeComponent } from './who-are-we.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';


@NgModule({
  declarations: [
    WhoAreWeComponent
  ],
  imports: [
    CommonModule,
    WhoAreWeRoutingModule,
    FooterComponent,
    MenuComponent,
    GenericButtonComponent,
  ]
})
export class WhoAreWeModule { }
