import { Component, OnInit } from '@angular/core';
import { IUser } from './interface/IUser.interface';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends BaseClass implements OnInit {
  user: IUser [] = [];

  displayedColumns: string[] = ['date', 'full_name', 'document', 'email', 'phone'];
  dataSource: any;

  ngOnInit(): void {
    this.getAllUsers();
    this.fieldsFilters = [{
      field: 'name',
      fieldName: 'Nombre'
    },
    {
      field: 'document',
      fieldName: 'Documento'
    },{
      field: 'email',
      fieldName: 'Correo'
    },
    {
      field: 'phone',
      fieldName: 'Celular'
    }];
  }

  getAllUsers() {
    this.baseService.validateFilter('user/all', this.filters).subscribe({
      next: (response: any) => {
        this.user = response.data;
        this.dataSource = response.data;
      },
    });
  }

  validateFilter(filter: {}) {
    if (JSON.stringify(filter) !== JSON.stringify(this.filters)) {
      this.filters = filter;
      this.getAllUsers();
    }
  }
}
