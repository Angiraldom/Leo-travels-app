import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../interfaces/IProduct.interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  private fb = inject(FormBuilder);
  public data!: IProduct;
  private baseService = inject(BaseService);
  selectedFiles: File[] = [];

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
    if (!this.data) {
      this.saveProduct();
      return;
    }
    this.updateProduct();
  }

  updateProduct() {
    const body = this.form.getRawValue();
    this.baseService.patchMethod('product/' + this.data._id, body).subscribe({
      next: () => {
        console.log('Actualizo correctamente');
        this.form.reset();
        this.selectedFiles = [];
      },
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
      },
    });
  }

  onFileSelected(event: any) {
    const newFiles: FileList = event.target.files;
    console.log(newFiles);

    for (let i = 0; i < newFiles.length; i++) {
      this.selectedFiles.push(newFiles[i]);
    }
    console.log(this.selectedFiles);
    console.log(event.target.files);
  }
}