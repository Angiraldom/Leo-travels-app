import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ITypeEvents } from '../interfaces/ITypeEvents.interface';

@Injectable({
  providedIn: 'root',
})
export class ConversionesService extends BaseService {
  constructor() {
    super();
  }

  standardEvent(eventName: ITypeEvents) {
    this.postMethod(`conversiones/standard`, { eventName }).subscribe();
  }

  purchaseEvent(value: number) {
    this.postMethod(`conversiones/purchase`, { value }).subscribe();
  }

  suscriptionEvent() {
    this.standardEvent('Subscribe');
  }

  leadEvent() {
    this.standardEvent('Lead');
  }

  addToCartEvent() {
    this.standardEvent('AddToCart');
  }

  initiateCheckoutEvent() {
    this.standardEvent('InitiateCheckout');
  }

  viewContentEvent() {
    this.standardEvent('ViewContent');
  }

  addPaymentInfoEvent() {
    this.standardEvent('AddPaymentInfo');
  }
}
