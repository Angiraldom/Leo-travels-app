import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalPrice',
  standalone: true
})
export class FinalPricePipe implements PipeTransform {

  transform(products: any[], shippingPrice = 0): number {
    const valueTotalProducts = this.getTotalValue(products);
    return valueTotalProducts + shippingPrice;
  }

  getTotalValue(products: any[]) {
    const total: number = products.reduce((value, item) => {
      const price = item.price * item.amount;
      return value = price + value;
    }, 0)
    return total;
  }
}
