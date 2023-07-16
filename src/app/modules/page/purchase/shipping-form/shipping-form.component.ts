import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { ICities, ICollectionCities } from '../interface/ICities.interface';

@Component({
  selector: 'app-shipping-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputNumberModule, DropdownModule],
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private baseService = inject(BaseService);

  @Output() emitForm = new EventEmitter();
  @Output() emitShippingPrice = new EventEmitter();

  cities: ICollectionCities[] = [];
  municipalities: ICities[] = [];
  $form!: Subscription;

  form: FormGroup = this.fb.group({
    country: new FormControl({ value: 'Colombia', disabled: true }),
    region: ['', Validators.required],
    city: ['', Validators.required],
    addressLine1: ['', Validators.required],
    addressLine2: [''],
    phoneNumber: ['']
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
    this.getCities();
  }

  ngOnDestroy(): void {
    this.$form.unsubscribe();
  }

  getCities() {
    this.baseService.getMethod('cities/allCities').subscribe({
      next: (res: any) => {
        this.cities = res.data;
      }
    });
  }

  setMunicipalities(event: any) {
    this.municipalities = this.cities.find((item) => item._id === event.value)?.municipalities!;
    this.form.get('city')?.reset();
    this.emitShippingPrice.emit(null);
  }

  setCityValue(event: any) {
    if (!event.value) {
      return;
    }
    this.form.get('city')?.setValue(event.value.nombreMunicipio);
    this.emitShippingPrice.emit(event.value);
  }
}
