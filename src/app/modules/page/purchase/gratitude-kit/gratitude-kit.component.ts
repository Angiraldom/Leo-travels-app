import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratitude-kit',
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
    this.router.navigate(['kit-viajero']);
  }
}
