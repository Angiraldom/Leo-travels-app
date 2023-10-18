import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GratitudeCourseComponent } from './components/gratitude-course/gratitude-course.component';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { GratitudeKitComponent } from './components/gratitude-kit/gratitude-kit.component';
import { BaseService } from 'src/app/core/services/base.service';
import { ErrorTransactionComponent } from './components/error-transaction/error-transaction.component';
import { AppState } from 'src/app/store/app.reducer';
import { clearCart } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-response-transaction',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    GratitudeCourseComponent,
    GratitudeKitComponent,
    ErrorTransactionComponent,
  ],
  templateUrl: './response-transaction.component.html',
  styleUrls: ['./response-transaction.component.scss'],
})
export default class ResponseTransactionComponent implements OnInit {
  private store = inject(Store<AppState>);
  private baseService = inject(BaseService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  $activatedRoute!: Subscription;

  refPayco!: string;
  transactionError = false;
  showGratitudCourse = true;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.validateParams(params);
    });
  }

  /**
   * Valida que tenga los parametros necesario en la url para renderizar.
   * @param params
   */
  validateParams(params: Params) {
    const buyCourseResponse = {
      "true": true,
      "false": false
    };
    this.refPayco = params['ref_payco'] || params['x_ref_payco'];
    let buyCourse = this.activatedRoute.snapshot.paramMap.get("buy-course");
    
    if (this.refPayco && (buyCourse == 'true' || buyCourse == 'false')) {
      this.showGratitudCourse = buyCourseResponse[buyCourse];
      this.getStatusTransaction();
    } else {
      this.router.navigate(['home']);
    }
  }

  getStatusTransaction() {
    this.baseService
      .http.get(
        `https://secure.epayco.co/validation/v1/reference/${this.refPayco}`
      )
      .subscribe({
        next: (res: any) => {
          
          if (!res.success) {
            this.router.navigate(['home']);
            return;
          }

          if (res.data.x_response === 'Aceptada' || res.data.x_response === 'Pendiente') {
            this.clearData();
          }

          if (res.data.x_response === 'Fallida') {
            this.transactionError = true;
          }
        },
      });
  }

  clearData() {
    this.store.dispatch(clearCart());
    localStorage.removeItem('reference');
  }
}
