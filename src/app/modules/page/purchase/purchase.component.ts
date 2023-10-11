import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControlStatus } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { AppState } from 'src/app/store/app.reducer';
import { IWompiInterface } from './interface/IWompiWidget.interface';
import { clearCart, setShippingPrice } from 'src/app/store/actions/cart.actions';
import { IProduct } from '../../admin/products/interfaces/IProduct.interface';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';
import { MesaggeService } from 'src/app/core/services/message.service';
import { ICities } from './interface/ICities.interface';
import { KIT_VIAJERO_ID } from 'src/app/shared/constants';

declare let WidgetCheckout: any;

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

  excessLimitValueWompi = false;
  totalValue = 0;
  succesfulTransaction: boolean = false;
  showShippingAdress: boolean = false;
  userExist: boolean = false;
  products: IProduct[] | ICourse[] = [];
  reference = '';
  invalidCustomerForm: FormControlStatus = 'INVALID';
  invalidFormAddress: FormControlStatus = 'INVALID';
  protected readonly idKitViajero = KIT_VIAJERO_ID;

  wompiObject: IWompiInterface = {
    currency: 'COP',
    amountInCents: 0,
    reference: '',
    publicKey: 'pub_test_YHZn4Q2jPbQ5hnohVI5MpMeUtmV1y896',
    // publicKey: 'pub_prod_ZCkW5J9awng6lO5EdFhYLgPmL7PSshch',
    redirectUrl: 'https://vilean.co/#/response-transaction',
  };

  epaycoObject = {
    //Parametros compra (obligatorio)
    invoice: '',
    currency: 'usd',
    name: 'Plan de facturacion electronica',
    description: 'Plan de facturacion electronica',
    tax_base: '0',
    tax: '0',
    amount: 0,
    country: 'co',
    lang: 'es',
    external: 'false',
    //Onpage="false" - Standard="true"
    //Atributos opcionales
    method: 'GET',
    extra1: '',
    extra2: '',
    extra3: '',
    response: 'http://localhost:4200/#/pagar',
    confirmation:
      'https://leo-travels-api-production.up.railway.app/payments/notification-epayco',
  };

  ngOnInit(): void {
    this.validateExcessLimitValue();
    this.$store = this.store.select('cart').subscribe({
      next: ({ products, reference }) => {
        this.reference = reference;
        this.products = products;
        if (this.products.length === 0) {
          this.router.navigate(['cursos']);
          return;
        }
        this.validateShowform();
      },
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();

    if (this.succesfulTransaction) {
      this.store.dispatch(clearCart());
      localStorage.removeItem('reference');
    }
  }

  /**
   * Consulta las compras que se han hecho en wompi por el dia actual.
   */
  validateExcessLimitValue() {
    this.baseService.getMethod('payments/wompiTransactions').subscribe({
      next: (res: any) => {
        if (res.data >= 9000000) {
          this.excessLimitValueWompi = true;
        }
      }
    });
  }

  /**
   * Valida si las comprar del dia en wompi exceden el valor. De ser asi el pago se hace con epayco.
   */
  purchase() {
    if (this.excessLimitValueWompi) {
      this.purchaseEpayco();
      return;
    }
    this.purchaseWompi();
  }

  purchaseEpayco() {
    this.epaycoObject.invoice = this.reference;
    this.epaycoObject.amount = Number(this.totalValue);
    // this.handler.onCloseModal = this.onCloseEpaycoModal;
    this.handler.open(this.epaycoObject, () => {
      console.log('entrooo');
    });
  }

  purchaseWompi() {
    this.addShippingPhoneNumber();
    this.wompiObject.reference = this.reference;
    this.wompiObject.amountInCents = Number(this.totalValue + '00');
    this.openCheckout();
  }

  addShippingPhoneNumber() {
    if (!this.showShippingAdress) {
      return;
    }
    this.wompiObject.shippingAddress!.phoneNumber =
      this.wompiObject.customerData!.phoneNumber;
  }

  setCustomerData(form: { data: any; statusForm: FormControlStatus }) {
    form.data['fullName'] = form.data.name + ' ' + form.data.lastName;
    delete form.data.name;
    delete form.data.lastName;
    this.invalidCustomerForm = form.statusForm;
    this.wompiObject.customerData = form.data;
  }

  setshippingAddressData(form: { data: any; statusForm: FormControlStatus }) {
    delete form.data.country;
    this.invalidFormAddress = form.statusForm;
    this.wompiObject.shippingAddress = form.data;
    this.wompiObject.shippingAddress!.country = 'CO';
  }

  openCheckout() {
    const checkout = new WidgetCheckout(this.wompiObject);

    checkout.open((result: any) => {
      const status = result.transaction.status;
      if (status === 'APPROVED') {
        this.succesfulTransaction = true;
        localStorage.removeItem('reference');
      }
    });
  }

  validateShowform() {
    this.showShippingAdress = this.products?.some((item) => !item.modules);
    if (this.showShippingAdress) {
      return;
    }
    delete this.wompiObject.shippingAddress;
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
      this.purchase();
      return;
    }
    if (
      !this.userExist &&
      this.invalidFormAddress === 'VALID' &&
      this.invalidCustomerForm === 'VALID'
    ) {
      this.purchase();
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
