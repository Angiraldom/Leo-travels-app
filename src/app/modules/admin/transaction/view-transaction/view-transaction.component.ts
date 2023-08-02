import { Component, inject } from '@angular/core';
import { ITransaction } from '../interfaces/ITransaction.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent {
  data: ITransaction = inject(MAT_DIALOG_DATA);

}
