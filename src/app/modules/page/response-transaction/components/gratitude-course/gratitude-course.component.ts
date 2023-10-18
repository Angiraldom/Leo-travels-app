import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { HeaderPromotionsComponent } from 'src/app/shared/header-promotions/header-promotions.component';

@Component({
  selector: 'app-gratitude-course',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    GenericButtonComponent,
    HeaderPromotionsComponent,
  ],
  templateUrl: './gratitude-course.component.html',
  styleUrls: ['./gratitude-course.component.scss'],
})
export class GratitudeCourseComponent {
  private router = inject(Router);
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    setTimeout(() => {
      this.mainContent.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  }

  changeRoute() {
    this.router.navigate(['home']);
  }
}
