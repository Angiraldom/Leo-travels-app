import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControlStatus } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Message } from 'primeng/api';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { AppState } from 'src/app/store/app.reducer';
import { IWompiInterface } from './interface/IWompiWidget.interface';
import { clearCart } from 'src/app/store/actions/cart.actions';

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
  $store!: Subscription;

  succesfulTransaction: boolean = false;
  showShippingAdress: boolean = false;
  userExist: boolean = true;
  products: any[] = [];
  reference = '';
  invalidCustomerForm: FormControlStatus = 'INVALID';
  invalidFormAddress: FormControlStatus = 'INVALID';
  message: Message[] = [
    {
      severity: 'warn',
      summary:
        'El correo ingresado, ya tiene un curso asociado',
    },
  ];

  wompiObject: IWompiInterface = {
    currency: 'COP',
    amountInCents: 0,
    reference: '',
    publicKey: 'pub_test_YHZn4Q2jPbQ5hnohVI5MpMeUtmV1y896',
    redirectUrl: 'http://localhost:4200/response-transaction',
  };

  ngOnInit(): void {
    this.$store = this.store.select('cart').subscribe({
      next: ({ products, reference }) => {
        this.reference = reference;
        this.products = products;
        if (this.products.length === 0) {
            this.router.navigate(['kit-viajero']);
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

  setAmount() {
    const total = this.products?.reduce((value, item) => {
      const price = item.price * item.amount;
      return (value = price + value);
    }, 0);
    this.wompiObject.amountInCents = Number(total + '00');
  }

  purchase() {
    this.wompiObject.reference = this.reference;
    this.setAmount();
    this.openCheckout();
  }

  setCustomerData(form: { data: any; statusForm: FormControlStatus }) {
    form.data['fullName'] = form.data.name + ' ' + form.data.lastName;
    delete form.data.name;
    delete form.data.lastName;
    this.invalidCustomerForm = form.statusForm;
    this.wompiObject.customerData = form.data;
  }

  setshippingAddressData(form: { data: any; statusForm: FormControlStatus }) {
    delete form.data.ZIPcode;
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
    this.baseService.postMethod('user/findByEmail', { email: $event.data.email }).subscribe({
      next: (res: any) => {
        if (Object.keys(res.data).length > 0) {
          this.userExist = true;
        } else {
          this.userExist = false;
        }
      }
    });
  }

  disabledButton() {
    if (!this.userExist && !this.showShippingAdress && this.invalidCustomerForm === 'VALID') {
      this.purchase();
    }
    if (!this.userExist && this.invalidFormAddress === 'VALID' && this.invalidCustomerForm === 'VALID') {
      this.purchase();
    }
  }
}
