import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-buy-section',
  templateUrl: './info-buy-section.component.html',
  styleUrls: ['./info-buy-section.component.scss']
})
export class InfoBuySectionComponent {
  @Output() onAddCourse = new EventEmitter();

  handleClick() {
    this.onAddCourse.emit();
  }
}
