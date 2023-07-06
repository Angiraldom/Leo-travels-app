import { Component, inject } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { ITransaction } from '../interfaces/ITransaction.interface';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent {
  private baseService = inject(BaseService);

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
