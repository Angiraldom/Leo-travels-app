import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IClassButton} from "../../../../shared/generic-button/interface/IClassButton.interface";

@Component({
  selector: 'app-price-section',
  templateUrl: './price-section.component.html',
  styleUrls: ['./price-section.component.scss']
})
export class PriceSectionComponent {
  @Input() showHr = false;
  @Input() typeClass: 'letter_blue' | 'letter_yellow_white' = 'letter_yellow_white';
  @Input() classButton: IClassButton = 'class_blue_color_yellow';
  @Output() onAddCourse = new EventEmitter();

  handleClick() {
    this.onAddCourse.emit();
  }
}
