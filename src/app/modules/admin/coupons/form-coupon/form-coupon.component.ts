import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Subscription, forkJoin } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseClass } from 'src/app/core/base.class';
import { ICoupon } from '../interfaces/ICoupon.interface';
import { IProduct } from '../../products/interfaces/IProduct.interface';
import { ICourse } from '../../courses/interfaces/ICourses.interface';

@Component({
  selector: 'app-form-coupon',
  templateUrl: './form-coupon.component.html',
  styleUrls: ['./form-coupon.component.scss']
})
export class FormCouponComponent extends BaseClass implements OnInit, OnDestroy {
  data: ICoupon = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<this>);
  loading = false;
  minDate = new Date();
  products: IProduct[] | ICourse[] = [];
  $getValues!: Subscription;
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
    this.getValues();
  }

  ngOnDestroy(): void {
    this.$getValues.unsubscribe();
  }

  /**
   * Gets the products and courses for showing in list.
   */
  getValues() {
    this.$getValues = forkJoin({
      products: this.baseService.getMethod('product'),
      course: this.baseService.getMethod('course/all-courses')
    }).subscribe({
      next: ({ products, course }) => {
        const newProducts = structuredClone(products) as any;
        const newCourse = structuredClone(course) as any;
        this.products = [...newProducts.data, ...newCourse.data];  
      }
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

  upperCaseFormat() {
    if (this.form.get('coupon')?.value.trim()) {
      const upperCase = this.form.get('coupon')?.value.toUpperCase().trim();
      this.form.get('coupon')?.setValue(upperCase);
    }
  }
}
