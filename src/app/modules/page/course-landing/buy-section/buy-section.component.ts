import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buy-section',
  templateUrl: './buy-section.component.html',
  styleUrls: ['./buy-section.component.scss']
})
export class BuySectionComponent {
  @Output() onAddCourse = new EventEmitter();

  handleClick() {
    this.onAddCourse.emit();
  }
}
