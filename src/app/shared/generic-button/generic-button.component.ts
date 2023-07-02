import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {
  @Input() classButton: 'class_blue' | 'class_yellow' | 'class_blue_color_yellow' | 'class_white' = 'class_yellow';
  @Input() sizeButton: 'small' | 'large' | 'super-large' = 'large';
  @Input() nameButton = '';
  @Input() load = false;
  @Input() disabledButton = false;
  @Output() emitClick = new EventEmitter();

  handelClick() {
    if (this.disabledButton) {
      return;
    }
    this.emitClick.emit();
  }
}
