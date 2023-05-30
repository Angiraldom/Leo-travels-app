import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../interfaces/IProduct.interface';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  private fb = inject(FormBuilder);
  public data!: IProduct;
  private baseService = inject(BaseService);

  form: FormGroup = this.fb.group({
    _id: [],
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: [0, Validators.required],
    weight: [0, Validators.required],
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
      return
    }
    this.updateProduct();
  }

  updateProduct() {
    const body = this.form.getRawValue();
    this.baseService.patchMethod('product/'+ this.data._id, body).subscribe({
      next: () => { 
        console.log("Actualizo correctamente") 
      }
    });
  }

  saveProduct() {
    const body = this.form.getRawValue();
    this.baseService.postMethod('product', body).subscribe({
      next: () => { 
        console.log("Guardo correctamente") 
      }
    });
  }
}