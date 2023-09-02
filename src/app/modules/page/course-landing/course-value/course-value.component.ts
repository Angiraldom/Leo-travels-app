import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IClassButton } from 'src/app/shared/generic-button/interface/IClassButton.interface';

@Component({
  selector: 'app-course-value',
  templateUrl: './course-value.component.html',
  styleUrls: ['./course-value.component.scss']
})
export class CourseValueComponent {
  @Input() showHr = true;
  @Input() typeClass: 'letter_blue' | 'letter_yellow_white' = 'letter_yellow_white';
  @Input() classButton: IClassButton = 'class_yellow';
  @Output() onAddCourse = new EventEmitter();

  handleClick() {
    this.onAddCourse.emit();
  }
}
