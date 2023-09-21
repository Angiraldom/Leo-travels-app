import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConversionesService } from 'src/app/core/services/conversiones.service';

@Component({
  selector: 'app-course-promotion',
  templateUrl: './course-promotion.component.html',
  styleUrls: ['./course-promotion.component.scss']
})
export class CoursePromotionComponent implements AfterViewInit {
  private router = inject(Router);
  protected conversionesService = inject(ConversionesService);
  
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
