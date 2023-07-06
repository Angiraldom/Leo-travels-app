import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-discount-coupon',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, InputTextModule],
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.scss']
})
export class DiscountCouponComponent {

}
