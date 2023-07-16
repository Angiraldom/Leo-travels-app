import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router = inject(Router);
  changeRoute(url: string) {
    this.router.navigate([url]);
  }

  changeExternalRoute(url: string) {
    window.open(url, '_blank');
  }
}
