import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/core/base.class';
import { ITransaction } from './interfaces/ITransaction.interface';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent extends BaseClass implements OnInit {

  transaction: ITransaction[] = [];

  displayedColumns: string[] = ['n°order', 'reference', 'date', 'document', 'email', 'total'];
  dataSource: any;

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.baseService.getMethod('payments/getPayments').subscribe({
      next: (response: any) => {
        this.transaction = response.data;
        this.dataSource = response.data;
      },
    });
  }
}
