import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-video-session',
  templateUrl: './video-session.component.html',
  styleUrls: ['./video-session.component.scss']
})
export class VideoSessionComponent {
  @Output() onAddTravelKit = new EventEmitter();

  handleClick() {
    this.onAddTravelKit.emit();
  }
}
