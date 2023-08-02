import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IClassButton, IMarkCouponClass } from './interface/IClassButton.interface';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss']
})
export class GenericButtonComponent {
  @Input() classButton: IClassButton = 'class_yellow';
  @Input() sizeButton: 'small' | 'large' | 'medium' = 'large';
  @Input() nameButton = '';
  @Input() load = false;
  @Input() disabledButton = false;
  @Input() textKit: string = '15KITVIAJERO';
  @Input() textCourse: string = '20LANZAMIENTO';
  @Input() showCouponTextKit: boolean = false;
  @Input() showCouponTextCourse: boolean = false;
  @Input() classMarkCoupon: IMarkCouponClass = 'coupon-color_blue_white';

  @Output() emitClick = new EventEmitter();

  handelClick() {
    if (this.disabledButton) {
      return;
    }
    this.emitClick.emit();
  }
}
