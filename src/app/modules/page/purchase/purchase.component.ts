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

  succesfulTransaction: boolean = false;
  showShippingAdress: boolean = false;
  userExist: boolean = true;
  products: IProduct[] | ICourse[] = [];
  reference = '';
  invalidCustomerForm: FormControlStatus = 'INVALID';
  invalidFormAddress: FormControlStatus = 'INVALID';
  protected readonly idKitViajero = '64a75cd97a31b132537ae59a';

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

  setAmount() {
    const arrayProducts = this.products as any[];
    const total = arrayProducts?.reduce((value, item) => {
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
          this.messageService.warningMessage('', 'El email ingresado ya existe');
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

  setShippingPrice(value: ICities | null) {
    if (!value) {
      this.store.dispatch(setShippingPrice({ shippingPrice: 0 }));
      return;
    }
    this.validateShippingPrice(value);
  }
  
  validateShippingPrice(value: ICities) {
    const existTravelKitProduct = this.products.some((item) => item._id === this.idKitViajero);
    
    if (existTravelKitProduct) {
      this.store.dispatch(setShippingPrice({ shippingPrice: value.shippingPrice.valor1 }));
      return;
    }

    const existAnotherProduct = this.products.some((item) => item._id !== this.idKitViajero && !item.modules);
    if (existAnotherProduct) {
      this.store.dispatch(setShippingPrice({ shippingPrice: value.shippingPrice.valor2 }));
      return;
    }
    this.store.dispatch(setShippingPrice({ shippingPrice: 0 }));
  }
}
