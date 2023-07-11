import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kit-price-session',
  templateUrl: './kit-price-session.component.html',
  styleUrls: ['./kit-price-session.component.scss']
})
export class KitPriceSessionComponent {
  @Output() onAddTravelKit = new EventEmitter();

  handleClick() {
    this.onAddTravelKit.emit();
  }
}
