import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-shipping-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputNumberModule],
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent {
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    country: new FormControl({ value: 'Colombia', disabled: true }),
    department: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required],
    specialInstructions: [''],
    ZIPcode: []
  });
}
