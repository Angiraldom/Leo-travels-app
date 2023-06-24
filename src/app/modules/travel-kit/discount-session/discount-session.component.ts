import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-discount-session',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent],
  templateUrl: './discount-session.component.html',
  styleUrls: ['./discount-session.component.scss']
})
export class DiscountSessionComponent {

}
