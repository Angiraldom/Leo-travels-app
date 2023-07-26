import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-promotion',
  templateUrl: './course-promotion.component.html',
  styleUrls: ['./course-promotion.component.scss']
})
export class CoursePromotionComponent implements AfterViewInit {
  private router = inject(Router);
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLElement>;
  @Output() onAddCourse = new EventEmitter();

  ngAfterViewInit() {
    setTimeout(() => {
      this.mainContent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  addCourse() {
    this.onAddCourse.emit();
  }

  changeRoute() {
    this.router.navigate(['pagar']);
  }
}
