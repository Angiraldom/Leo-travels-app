import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionsComponent } from './list-transactions/list-transactions.component';
import { TransactionComponent } from './transaction.component';
import { HeaderModulesComponent } from "../../shared/header-modules/header-modules.component";
import { TransactionRoutingModule } from './transaction-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { TotalValuePipe } from "../../core/pipes/total-values.pipe";



@NgModule({
    declarations: [
        ListTransactionsComponent,
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
