import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { viewCreate } from 'src/app/store/actions/course.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppState>);

  $store!: Subscription;
  createTab = false;

  ngOnInit(): void {
    this.$store = this.store.select('courseView').subscribe({
      next: ({ inViewCreate }) => this.createTab = inViewCreate
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  changeView() {
    this.store.dispatch(viewCreate());
  }
}
