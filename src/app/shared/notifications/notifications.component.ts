import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { INotifications } from 'src/app/modules/student/interface/INotifications.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  private router = inject(Router);
  
  @Input() notificationsList: Array<INotifications> = [];
  @Input() totalRecords = 0;
  @Input() offset = 0;
  @Output() emitGetNotifications = new EventEmitter();

  goToComment(notification: INotifications) {
    this.router.navigate([
      `estudiante/clase/${notification.comment.idCourse}/${notification.comment.idModule}/${notification.comment.class._id}`,
    ]);
  }

  /**
   * Get more notifications.
   */
  getNotifications() {
    this.emitGetNotifications.emit(this.offset=+1);
  }
}
