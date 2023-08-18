import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private baseService = inject(BaseService);
  private store = inject(Store<AppState>);

  course!: ICourse;
  user!: IUser;
  $profile!: Subscription;

  ngOnInit(): void {
    this.getCourse();
    this.$profile = this.store.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.$profile.unsubscribe();
  }

  changeRoute(id: string) {
    this.router.navigate([`estudiante/course/${id}`]);
  }

  getCourse() {
    this.baseService.getMethod('course/all-courses').subscribe({
      next: (res: any) => {
        this.course = res.data[0];
      }
    });
  }
}
