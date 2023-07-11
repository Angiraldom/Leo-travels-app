import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recommendation-session',
  templateUrl: './recommendation-session.component.html',
  styleUrls: ['./recommendation-session.component.scss']
})
export class RecommendationSessionComponent {
  @Output() onAddTravelKit = new EventEmitter();

  handleClick() {
    this.onAddTravelKit.emit();
  }
}
