import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.scss']
})
export class ListPaymentsComponent implements OnInit {

  constructor(
    private baseService: BaseService,
  ) { }

  ngOnInit(): void {
    this.baseService.getMethod('payments').subscribe({
      next: () => {

      },
      error(err) {
        
      },
    })
  }
}
