import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControlStatus } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { AppState } from 'src/app/store/app.reducer';
import { setShippingPrice } from 'src/app/store/actions/cart.actions';
import { IProduct } from '../../admin/products/interfaces/IProduct.interface';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';
import { MesaggeService } from 'src/app/core/services/message.service';
import { ICities } from './interface/ICities.interface';
import { KIT_VIAJERO_ID } from 'src/app/shared/constants';
import { IEpaycoTransaction } from './interface/IEpaycoTransaction.interface';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  private router = inject(Router);
  private baseService = inject(BaseService);
  private messageService = inject(MesaggeService);
  $store!: Subscription;

  totalValue = 0;
  showShippingAdress: boolean = false;
  userExist: boolean = false;
  products: IProduct[] | ICourse[] = [];
  reference = '';
  invalidCustomerForm: FormControlStatus = 'INVALID';
  invalidFormAddress: FormControlStatus = 'INVALID';
  protected readonly idKitViajero = KIT_VIAJERO_ID;
  private responseUrl = 'https://vilean.co/#/response-transaction';

  epaycoObject: IEpaycoTransaction = {
    invoice: '',
    currency: 'usd',
    name: 'Plan de facturacion electronica',
    description: 'Plan de facturacion electronica',
    amount: 0,
    country: 'co',
    lang: 'es',
    external: 'false',
    response: '',
    confirmation:
      'https://leo-travels-api-production.up.railway.app/payments/notification-epayco',
    methodsDisable: []
  };

  window: any = window;
  handler = this.window?.ePayco?.checkout?.configure({
    key: 'efeb27be0943f1db92b378501dea7512',
    // key: '63eb7194d798375a916d062878bfc4f7',
    test: false,
  });

  ngOnInit(): void {
    this.$store = this.store.select('cart').subscribe({
      next: ({ products, reference }) => {
        this.reference = reference;
        this.products = products;
        if (this.products.length === 0) {
          this.router.navigate(['cursos']);
          return;
        }
        this.validateShowAdressform();
      },
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  purchaseEpayco() {
    this.epaycoObject.invoice = this.reference;
    this.epaycoObject.amount = Number(this.totalValue);
    this.handler.open(this.epaycoObject, () => {});
  }

  setCustomerData(form: { data: any; statusForm: FormControlStatus }) {
    this.invalidCustomerForm = form.statusForm;
    this.epaycoObject.extra1 = JSON.stringify(form.data);
  }

  setShippingAddressData(form: { data: any; statusForm: FormControlStatus }) {
    this.invalidFormAddress = form.statusForm;
    this.epaycoObject.extra2 = JSON.stringify(form.data);
  }

  validateShowAdressform() {
    this.showShippingAdress = this.products?.some((item) => !item.modules);
    this.epaycoObject.response = this.responseUrl + `/${!this.showShippingAdress}`;
  }

  validateUser($event: any) {
    if ($event.statusForm !== 'VALID') {
      return;
    }
    if (this.products?.some((item) => item.modules)) {
      this.baseService
        .postMethod('user/findByEmail', { email: $event.data.email })
        .subscribe({
          next: (res: any) => {
            if (Object.keys(res.data).length > 0) {
              this.userExist = true;
              this.messageService.warningMessage('info.theEmailExists');
            } else {
              this.userExist = false;
            }
          },
        });
    }
  }

  disabledButton() {
    if (this.userExist) {
      this.messageService.warningMessage('info.theEmailExists');
      return;
    }
    if (
      !this.userExist &&
      !this.showShippingAdress &&
      this.invalidCustomerForm === 'VALID'
    ) {
      this.purchaseEpayco();
      return;
    }
    if (
      !this.userExist &&
      this.invalidFormAddress === 'VALID' &&
      this.invalidCustomerForm === 'VALID'
    ) {
      this.purchaseEpayco();
      return;
    }
    this.messageService.warningMessage('info.completeForm');
  }

  setShippingPrice(value: ICities | null) {
    if (!value) {
      this.store.dispatch(setShippingPrice({ shippingPrice: 0 }));
      return;
    }
    this.validateShippingPrice(value);
  }

  validateShippingPrice(value: ICities) {
    const existTravelKitProduct = this.products.some(
      (item) => item._id === this.idKitViajero
    );

    if (existTravelKitProduct) {
      this.store.dispatch(
        setShippingPrice({ shippingPrice: value.shippingPrice.valor1 })
      );
      return;
    }

    const existAnotherProduct = this.products.some(
      (item) => item._id !== this.idKitViajero && !item.modules
    );
    if (existAnotherProduct) {
      this.store.dispatch(
        setShippingPrice({ shippingPrice: value.shippingPrice.valor2 })
      );
      return;
    }
    this.store.dispatch(setShippingPrice({ shippingPrice: 0 }));
  }
}
