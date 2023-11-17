import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/core/base.class';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { ITransaction } from './interfaces/IPayment.interface';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent extends BaseClass implements OnInit {
  modal = ViewTransactionComponent;
  transaction: ITransaction[] = [];

  displayedColumns: string[] = ['n°order', 'date', 'total', 'client', 'actions'];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.baseService.getMethod('payments/getPayments').subscribe({
      next: (response: any) => {
        this.transaction = response.data;
      },
    });
  }

  openModal(data: ITransaction) {
    this.dialog.open(this.modal, {
      hasBackdrop: true,
      data,
      width: '700px'
    });
  }
}
