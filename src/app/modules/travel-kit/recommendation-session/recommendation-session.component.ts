import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-recommendation-session',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './recommendation-session.component.html',
  styleUrls: ['./recommendation-session.component.scss']
})
export class RecommendationSessionComponent {

}
