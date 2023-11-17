import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-header-modules',
  standalone: true,
  imports: [CommonModule, MatButtonModule, InputTextModule, DropdownModule],
  templateUrl: './header-modules.component.html',
  styleUrls: ['./header-modules.component.scss']
})
export class HeaderModulesComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() removeButton = true;
  @Input() fields = [];
  @Output() handleClick = new EventEmitter();

  onHandleClick() {
    this.handleClick.emit();
  }
}
