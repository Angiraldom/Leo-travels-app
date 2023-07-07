import { Component, inject } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { IUser } from '../interface/IUser.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  private baseService = inject(BaseService);

  user: IUser [] = [];

  displayedColumns: string[] = ['document', 'full_name', 'email'];
  dataSource: any;


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.baseService.getMethod('user/all').subscribe({
      next: (response: any) => {
        console.log("user",response.data);
        this.user = response.data;
        this.dataSource = response.data;
      },
    });
  }

}
