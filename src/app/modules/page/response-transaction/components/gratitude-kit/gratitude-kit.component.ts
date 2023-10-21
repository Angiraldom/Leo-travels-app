import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-gratitude-kit',
  standalone: true,
  imports: [
    CommonModule,
    GenericButtonComponent,
  ],
  templateUrl: './gratitude-kit.component.html',
  styleUrls: ['./gratitude-kit.component.scss']
})
export class GratitudeKitComponent {
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
