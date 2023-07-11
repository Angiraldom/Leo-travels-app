import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-discount-session',
  templateUrl: './discount-session.component.html',
  styleUrls: ['./discount-session.component.scss']
})
export class DiscountSessionComponent {
  @Output() onAddTravelKit = new EventEmitter();

  handleClick() {
    this.onAddTravelKit.emit();
  }
}
