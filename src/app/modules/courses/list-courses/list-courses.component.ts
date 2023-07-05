import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { viewCreate } from 'src/app/store/actions/course.actions';
import { AppState } from 'src/app/store/app.reducer';
import { ICourse } from '../interfaces/ICourses.interface';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {
  private baseService = inject(BaseService);
  private store = inject(Store<AppState>);

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
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
