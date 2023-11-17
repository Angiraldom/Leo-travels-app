import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { viewCreate } from 'src/app/store/actions/course.actions';
import { AppState } from 'src/app/store/app.reducer';
import { ICourse } from '../interfaces/ICourses.interface';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent extends BaseClass implements OnInit {;
  private store = inject(Store<AppState>);

  displayedColumns: string[] = ['name', 'price', 'actions'];
  dataSource: ICourse[] = [];

  ngOnInit(): void {
    this.baseService.getMethod('course/all-courses').subscribe({
      next: (response: any) => {
        this.dataSource = response.data;
      }
    })
  }

  changeView(course: ICourse) {
    this.store.dispatch(viewCreate({course}));
  }
}
