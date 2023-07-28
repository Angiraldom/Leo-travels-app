import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { IProduct } from '../interfaces/IProduct.interface';
import { BaseClass } from 'src/app/core/base.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent extends BaseClass implements OnInit, OnDestroy {
  data: IProduct = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<this>);

  selectedFiles: File[] = [];
  loading = false;
  $taxes!: Subscription | undefined;
  $priceWithoutTaxes!: Subscription | undefined;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: new FormControl({ value: 0, disabled: true }, { validators: Validators.required}),
    taxes: [0, Validators.required],
    priceWithoutTaxes: [0, Validators.required],
    imageProperties: [],
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);      
    }

    this.$taxes = this.form.get('taxes')?.valueChanges.subscribe({
      next: () => this.calculatePrice()
    });

    this.$priceWithoutTaxes = this.form.get('priceWithoutTaxes')?.valueChanges.subscribe({
      next: () => this.calculatePrice()
    });
  }

  ngOnDestroy(): void {
    if (this.$priceWithoutTaxes) {
      this.$priceWithoutTaxes.unsubscribe();
    }
    if (this.$taxes) {
      this.$taxes.unsubscribe();
    }
  }

  validateAction() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    if (!this.data) {
      this.saveProduct();
      return;
    }
    this.updateProduct();
  }

  updateProduct() {
    const body = this.form.getRawValue();
    delete body.id;
    const formData = new FormData();

    this.selectedFiles.forEach((item, index) => {
      formData.append('images', this.selectedFiles[index]);
    });
    formData.append('data', JSON.stringify(body));

    this.baseService.patchMethod('product/' + this.data._id, formData).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.succesUpdate');
        this.form.reset();
        this.selectedFiles = [];
        this.loading = false;
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }

  saveProduct() {
    const body = this.form.getRawValue();
    delete body.id;
    const formData = new FormData();

    this.selectedFiles.forEach((item, index) => {
      formData.append('images', this.selectedFiles[index]);
    });
    formData.append('data', JSON.stringify(body));

    this.baseService.postMethod('product', formData).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.succesCreate');
        this.form.reset();
        this.selectedFiles = [];
        this.loading = false;
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFiles.push(file);
    this.setNameImage(file.name)
  }

  setNameImage(name: string) {
    const imagesName: {}[] = this.form.get('imageProperties')?.value;
    const object = { key: name, url: '' };
    if (imagesName) {
      imagesName.push(object);
      this.form.get('imageProperties')?.setValue(imagesName);
    } else {
      this.form.get('imageProperties')?.setValue([object]);
    }
  }

  removeImage(event: any) {
    this.selectedFiles = this.selectedFiles.filter((item) => item.name !== event.value.key);
  }

  calculatePrice() {
    const taxes = this.form.get('taxes')?.value;
    const priceWithoutTaxes = this.form.get('priceWithoutTaxes')?.value;

    const total = taxes + priceWithoutTaxes
    this.form.get('price')?.setValue(total);
  }
}