import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';



@NgModule({
    declarations: [
        TransactionComponent
    ],
    imports: [
        CommonModule,
        HeaderModulesComponent,
        TransactionRoutingModule,
        MaterialModule,
        TotalValuePipe
    ]
})
export class TransactionModule { }
