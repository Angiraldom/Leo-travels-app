import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HeaderModulesComponent } from 'src/app/shared/header-modules/header-modules.component';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { TitleModalComponent } from 'src/app/shared/title-modal/title-modal.component';



@NgModule({
    declarations: [
        TransactionComponent,
        ViewTransactionComponent
    ],
    imports: [
        CommonModule,
        HeaderModulesComponent,
        TransactionRoutingModule,
        MaterialModule,
        TotalValuePipe,
        TitleModalComponent
    ]
})
export class TransactionModule { }
