import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SweetAlertResult } from 'sweetalert2';

import { BaseClass } from 'src/app/core/base.class';
import { FormCouponComponent } from './form-coupon/form-coupon.component';
import { ICoupon } from './interfaces/ICoupon.interface';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent extends BaseClass implements OnInit, OnDestroy {
  private createModal = FormCouponComponent;

  $dialog!: Subscription;

  displayedColumns: string[] = ['coupon', 'description', 'discount', 'startDate', 'endDate', 'updatedAt', 'actions'];
  dataSource: ICoupon[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    if (!this.$dialog) {
      return;
    }
    this.$dialog.unsubscribe();
  }

  getAll() {
    this.baseService.getMethod('discount-coupons').subscribe({
      next: (response: any) => {
        this.dataSource = response.data;
      },
    });
  }

  openModal(data?: ICoupon) {
    this.$dialog = this.dialog.open(this.createModal, {
      hasBackdrop: true,
      data,
      height: 'auto',

    }).afterClosed().subscribe({
      next: ({ refresh }) => {
        if (refresh) {
          this.getAll();
        }
      }
    });
  }

  confirmRemove(product: ICoupon) {
    this.messageService.confirmRevomeMessage('info.confirmRemove').then((response: SweetAlertResult) => {
      if (response.isConfirmed) {
        this.remove(product);
      }
    });
  }

  remove(product: ICoupon) {
    this.baseService.deleteMethod('discount-coupons/' + product._id).subscribe({
      next: () => {
        this.messageService.succesMessage('succes.succesRemove');
        this.getAll();
      },
    });
  }
}
