import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header-modules',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header-modules.component.html',
  styleUrls: ['./header-modules.component.scss']
})
export class HeaderModulesComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() removeButton = true;
  @Output() handleClick = new EventEmitter();

  onHandleClick() {
    this.handleClick.emit();
  }
}
