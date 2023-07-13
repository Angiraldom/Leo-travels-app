import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputNumberModule],
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);

  @Output() emitForm = new EventEmitter();

  $form!: Subscription;
  form: FormGroup = this.fb.group({
    country: new FormControl({ value: 'Colombia', disabled: true }),
    region: ['Antioquia', Validators.required],
    city: ['Medellin', Validators.required],
    addressLine1: ['Calle 34', Validators.required],
    addressLine2: ['apto 14'],
    phoneNumber: ['3218903991']
  });

  ngOnInit(): void {
    this.$form = this.form.statusChanges.pipe(
      debounceTime(500)
    ).subscribe({
      next: (res) => {
        this.emitForm.emit({
          data: this.form.getRawValue(),
          statusForm: res
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.$form.unsubscribe();
  }
}
