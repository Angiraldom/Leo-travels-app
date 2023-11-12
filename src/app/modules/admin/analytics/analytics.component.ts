import { Component, OnInit } from '@angular/core';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent extends BaseClass implements OnInit {
  totalUsers = 0;
  courseStarted = 0;
  courseCompleted = 0;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.baseService.getMethod('user/analytics').subscribe({
      next: (res: any) => {
        this.totalUsers = res.data.totalUsers;
        this.courseStarted = res.data.usersStartedCourse;
        this.courseCompleted = res.data.usersCompletedCourse;
      },
    });
  }
}
