import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BaseClass } from 'src/app/core/base.class';
import { ICoupon } from '../interfaces/ICoupon.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../products/interfaces/IProduct.interface';

@Component({
  selector: 'app-form-coupon',
  templateUrl: './form-coupon.component.html',
  styleUrls: ['./form-coupon.component.scss']
})
export class FormCouponComponent extends BaseClass implements OnInit {
  data: ICoupon = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<this>);
  loading = false;
  minDate = new Date();
  products: IProduct[] = [];
  form: FormGroup = this.fb.group({
    coupon: ['', Validators.required],
    descriptionName: ['', Validators.required],
    discount: [0, Validators.required],
    startDate: [this.minDate, Validators.required],
    endDate: ['', Validators.required],
    products: [null, Validators.required],
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);      
      this.form.get('endDate')?.setValue(new Date(this.data.endDate));
      this.form.get('startDate')?.setValue(new Date(this.data.startDate));
    }
    this.getProducts();
  }

  getProducts() {
    this.baseService.getMethod('product').subscribe({
      next: (response: any) => {
        this.products = response.data;
      },
    });
  }

  validateAction() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    if (!this.data) {
      this.save();
      return;
    }
    this.update();
  }

  update() {
    const body = this.form.getRawValue();

    this.baseService.patchMethod('discount-coupons/' + this.data._id, body).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.succesUpdate');
        this.form.reset();
        this.loading = false;
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }

  save() {
    const body = this.form.getRawValue();

    this.baseService.postMethod('discount-coupons', body).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.succesCreate');
        this.form.reset();
        this.loading = false;
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }
}
