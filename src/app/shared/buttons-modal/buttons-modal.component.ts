import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-buttons-modal',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatDialogModule],
  templateUrl: './buttons-modal.component.html',
  styleUrls: ['./buttons-modal.component.scss']
})
export class ButtonsModalComponent {
  @Input() loading = false;
  @Input() disabledButton = false;
  @Output() handleSaveButton = new EventEmitter();

  onSave() {
    this.handleSaveButton.emit();
  }
}
