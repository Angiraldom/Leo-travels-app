import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation-session',
  templateUrl: './recommendation-session.component.html',
  styleUrls: ['./recommendation-session.component.scss']
})
export class RecommendationSessionComponent {
  protected router = inject(Router);

  changeRoute() {
    this.router.navigate(['/cursos'])
  }
}
