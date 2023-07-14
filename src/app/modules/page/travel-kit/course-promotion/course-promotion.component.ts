import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-promotion',
  templateUrl: './course-promotion.component.html',
  styleUrls: ['./course-promotion.component.scss']
})
export class CoursePromotionComponent {
  private router = inject(Router);
  @Output() onAddCourse = new EventEmitter();

  addCourse() {
    this.onAddCourse.emit();
  }

  changeRoute() {
    this.router.navigate(['pagar']);
  }
}
