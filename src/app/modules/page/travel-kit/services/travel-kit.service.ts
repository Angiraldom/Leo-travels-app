import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/modules/admin/products/interfaces/IProduct.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as cartActions from 'src/app/store/actions/cart.actions';
import { ICourse } from 'src/app/modules/admin/courses/interfaces/ICourses.interface';
import { MesaggeService } from 'src/app/core/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class TravelKitService {
  private store = inject(Store<AppState>);
  private mesaggeService = inject(MesaggeService);

  addProduct(product: IProduct | ICourse, reference: string, productsInCart: any[]) {
    const existProduct = productsInCart.find((item) => item._id === product._id)
    if (existProduct) {
      const newProduct = {...existProduct};
      newProduct.amount = existProduct.amount! + 1;
      this.store.dispatch(cartActions.updateProduct({ reference, product: newProduct }));
    } else {
      if (!product.hasOwnProperty('amount')) {
        product = Object.assign({}, product, { amount: 1 });
      }
      this.store.dispatch(cartActions.addProduct({ reference, product }));
    }
    this.mesaggeService.succesMessage('Producto añadido al carrito')
  }

  /**
   * This method validates, if exists a reference in localStorage.
   * @param product Product to add to the cart.
   * @param product Product to add to the cart.
   */
  validateReference(product: IProduct | ICourse, productsInCart: any[]) {
    let reference = localStorage.getItem('reference');
    if (!reference) {
      reference = this.generateReference();
      localStorage.setItem('reference', reference);
    }
    this.addProduct(product, reference, productsInCart);
  }

  generateReference() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const caracteresLength = caracteres.length;
    let id = '';
  
    for (let i = 0; i < 5; i++) {
      const indice = Math.floor(Math.random() * caracteresLength);
      id += caracteres.charAt(indice);
    }
  
    const timestamp = Date.now().toString(36);
    id += '-' + timestamp;
  
    return id;
  }
}
