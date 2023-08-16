import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';

import { MaterialModule } from 'src/app/material/material.module';
import { AppState } from 'src/app/store/app.reducer';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { BaseService } from 'src/app/core/services/base.service';
import { INotifications } from '../../student/interface/INotifications.interface';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    OverlayPanelModule,
    ButtonModule,
    NotificationsComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private state = inject(Store<AppState>);
  private baseService = inject(BaseService);

  user!: IUser;
  $state!: Subscription;
  notificationsList: Array<INotifications> = [];
  offset = 0;
  totalNotifications = 0;
  totalRecords = 0;

  ngOnInit(): void {
    this.$state = this.state.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      },
    });
    this.getNotifications(this.offset);
  }

  ngOnDestroy(): void {
    this.$state.unsubscribe();
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
