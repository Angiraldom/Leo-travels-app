import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../interfaces/IProduct.interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  private fb = inject(FormBuilder);
  data: IProduct = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<this>);
  private baseService = inject(BaseService);

  selectedFiles: File[] = [];
  loading = false;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    weight: [0, Validators.required],
    broad: [0],
    height: [0],
    long: [0],
    images: [],
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
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
        console.log('Actualizo correctamente');
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
        console.log('Guardo correctamente');
        this.form.reset();
        this.selectedFiles = [];
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }

  onFileSelected(event: any) {
    const newFiles: FileList = event.target.files;

    for (let i = 0; i < newFiles.length; i++) {
      this.selectedFiles.push(newFiles[i]);
    }
  }
}