import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gratitude-kit',
  templateUrl: './gratitude-kit.component.html',
  styleUrls: ['./gratitude-kit.component.scss']
})
export class GratitudeKitComponent {
  private router = inject(Router);

  changeRoute() {
    this.router.navigate(['kit-viajero']);
  }
}
