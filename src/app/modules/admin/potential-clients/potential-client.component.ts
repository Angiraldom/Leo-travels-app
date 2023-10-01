import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-potential-client',
  templateUrl: './potential-client.component.html',
  styleUrls: ['./potential-client.component.scss']
})
export class PotentialClientComponent extends BaseClass implements OnInit {
  user: [] = [];

  displayedColumns: string[] = ['name', 'email', 'createdAt'];
  dataSource: any;

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.baseService.getMethod('client').subscribe({
      next: (response: any) => {
        this.user = response.data;
        this.dataSource = response.data;
      },
    });
  }
}
