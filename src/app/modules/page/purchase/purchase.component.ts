import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

declare let WidgetCheckout: any;

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  private router = inject(Router);
  $store!: Subscription;

  products: any[] = [];
  reference = '';
  invalidCustomerForm = false;
  invalidFormAddress = false;
  customerData = {
    email: '',
    fullName: 'Lola Flores',
    legalId: '',
    legalIdType: 'CC',
  };
  shippingAddress = {
    // Opcional
    addressLine1: '',
    addressLine2: '',
    city: '',
    phoneNumber: '0',
    region: '',
    country: 'CO',
  };
  wompiObject = {
    currency: 'COP',
    amountInCents: 0,
    reference: '',
    publicKey: 'pub_test_YHZn4Q2jPbQ5hnohVI5MpMeUtmV1y896',
    redirectUrl: 'http://localhost:4200/response-transaction',
    shippingAddress: {},
    customerData: {},
  };

  ngOnInit(): void {
    this.$store = this.store.select('cart').subscribe({
      next: ({ products, reference }) => {
        this.reference = reference;
        this.products = products;
        if (this.products.length === 0) {
            this.router.navigate(['kit-viajero']);
        }
      },
    });
  }
  
  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  setAmount() {
    const total = this.products?.reduce((value, item) => {
      const price = item.price * item.amount;
      return (value = price + value);
    }, 0);
    this.wompiObject.amountInCents = Number(total + '00');
  }

  purchase() {
    if (this.shippingAddress.city !== '') {
      this.wompiObject.shippingAddress = { ...this.shippingAddress };
    }
    this.wompiObject.customerData = { ...this.customerData };
    this.wompiObject.reference = this.reference;
    console.log(this.wompiObject);
    this.setAmount();
    this.openCheckout();
  }

  setCustomerData(form: { data: any; statusForm: boolean }) {
    form.data['fullName'] = form.data.name + ' ' + form.data.lastName;
    delete form.data.name;
    delete form.data.lastName;
    this.invalidCustomerForm = form.statusForm;
    this.customerData = form.data;
  }

  setshippingAddressData(form: { data: any; statusForm: boolean }) {
    delete form.data.ZIPcode;
    this.invalidFormAddress = form.statusForm;
    this.shippingAddress = form.data;
  }

  openCheckout() {
    const checkout = new WidgetCheckout(this.wompiObject);
    // Almacenar el result en el storage y en la bd.
    checkout.open((result: any) => {
      const transaction = result.transaction;
      console.log('Transaction ID: ', transaction.id);
      console.log('Transaction object: ', transaction);
      // this.saveTransaction();
    });
  }
}
