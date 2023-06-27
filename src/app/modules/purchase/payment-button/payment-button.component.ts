import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-payment-button',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss'],
})
export class PaymentButtonComponent {
  @Output() emitPruchase = new EventEmitter();
  @Input() disabledButton = false;

  onEmitPurchase() {
    this.emitPruchase.emit();
  }
}
