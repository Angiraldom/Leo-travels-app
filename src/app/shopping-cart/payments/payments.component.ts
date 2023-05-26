import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.reducer';
import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from 'src/app/products/interfaces/IProduct.interface';
import { ICart } from '../interfaces/ICart.interface';

declare let WidgetCheckout: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  private baseService = inject(BaseService);
  private router =  inject(Router);
  private store = inject(Store<AppState>);
 
  products: IProduct[] = [];

  ngOnInit(): void {
    this.store.select('cart').subscribe({
      next: (cart: ICart) => this.products = cart.products
    });
  }

  // window.addEventListener('storage', function(event) { console.log(event)});

  buyProduct() {

    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: 2490000,
      reference: 'sk8438k4xmxm392sn2m',
      publicKey: 'pub_test_vF42biq1lpWCA3HJ4kTEGnougGLlUj4y',
      redirectUrl: 'http://localhost:4200/response-transaction',
      signature: '7a51a72a5fee8ccd7c6fb958b85a08dec37655a02b3d1645d81c17dadf6861ed',
      customerData: { // Opcional
        email: 'lola@gmail.com',
        fullName: 'Lola Flores',
        phoneNumber: '3040777777',
        phoneNumberPrefix: '+57',
        legalId: '123456789',
        legalIdType: 'CC'
      },
      shippingAddress: { // Opcional
        addressLine1: "Calle 123 # 4-5",
        city: "Bogota",
        phoneNumber: '3019444444',
        region: "Cundinamarca",
        country: "CO"
      }
    });
    // Almacenar el result en el storage y en la bd.
    checkout.open((result: any) => {
      const transaction = result.transaction
      console.log('Transaction ID: ', transaction.id)
      console.log('Transaction object: ', transaction)
      // this.saveTransaction();
    });
  }

  changeRoute() {
    this.router.navigate(['response-transaction']);
  }

  saveTransaction() {
    this.baseService.postMethod('', { data: 'obtenerla del storage' }).subscribe({
      next: () => {
        this.changeRoute();
        // Validar si guardo, sino guardo hacerle un retry de 3 veces y mientras tanto dejarlo almacenado
        // en el storage y despues guardarlo en la bd.
        // Despues de guardado enviar el correo de agradecimiento.
      }
    });
  }

  getSiganture() {
    const body = {
      currency: 'COP',
      amountInCents: 2490000,
      reference: '2121212',
      publicKey: 'pub_test_vF42biq1lpWCA3HJ4kTEGnougGLlUj4y',
    };
    this.baseService.postMethod('payments/signature', body).subscribe({
      next: (res) => {
        console.log(res)
      }
    });
  }
}
