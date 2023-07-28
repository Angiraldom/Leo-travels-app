import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratitude-course',
  templateUrl: './gratitude-course.component.html',
  styleUrls: ['./gratitude-course.component.scss']
})
export class GratitudeCourseComponent {
  private router = inject(Router);
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    setTimeout(() => {
      this.mainContent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }
  
  changeRoute() {
    this.router.navigate(['home']);
  }
}
