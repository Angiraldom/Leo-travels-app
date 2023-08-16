import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { Subscription } from 'rxjs';
import { INotifications } from '../interface/INotifications.interface';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.scss']
})
export class MenuStudentComponent {
  private state = inject(Store<AppState>);
  private baseService = inject(BaseService);

  user!: IUser;
  $state!: Subscription;
  isMenuOpen = false;
  notificationsList: Array<INotifications> = [];
  offset = 0;
  totalNotifications = 0;
  totalRecords = 0;

  ngOnInit(): void {
    this.$state = this.state.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
    this.getNotifications(this.offset);
  }

  ngOnDestroy(): void {
    this.$state.unsubscribe();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getNotifications(offset: number) {
    this.baseService.getMethod('notifications/', 5, offset).subscribe({
      next: (res: any) => {
        this.notificationsList = [...this.notificationsList, ...res.data];
        this.totalNotifications = this.notificationsList?.filter(
          (item) => !item.seenBy?.some((user) => user === this.user._id)
        ).length;
        this.totalRecords = res.totalRecords;
      },
    });
  }

  seenNotifications() {
    if (this.totalNotifications > 0) {
      this.baseService.getMethod('notifications/update').subscribe();
    }
  }
}
