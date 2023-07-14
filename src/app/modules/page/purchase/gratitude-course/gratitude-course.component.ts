import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratitude-course',
  templateUrl: './gratitude-course.component.html',
  styleUrls: ['./gratitude-course.component.scss']
})
export class GratitudeCourseComponent {
  private router = inject(Router);

  changeRoute() {
    this.router.navigate(['kit-viajero']);
  }
}
