import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponsRoutingModule } from './coupons-routing.module';
import { FormCouponComponent } from './form-coupon/form-coupon.component';
import { CouponComponent } from './coupon.component';
import { SharedModule } from 'primeng/api';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { ButtonsModalComponent } from 'src/app/shared/buttons-modal/buttons-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';


@NgModule({
  declarations: [
    FormCouponComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    SharedModule,
    MaterialModule,
    HeaderModulesComponent,
    ButtonsModalComponent,
    ReactiveFormsModule,
    TitleModalComponent,
    PrimengModule
  ]
})
export class CouponsModule { }
