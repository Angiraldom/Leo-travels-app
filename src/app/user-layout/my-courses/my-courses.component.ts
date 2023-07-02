import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent {
  private router = inject(Router);

  changeRoute(id: string) {
    this.router.navigate([`student/course/${id}`]);
  }
}
