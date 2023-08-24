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
      if (item.discount) {
        return value += this.calculateDiscount(item.price, item.discount, item.amount);
      }
      const price = item.price * item.amount;
      return value += price;
    }, 0)
    return total;
  }

  calculateDiscount(precioOriginal: number, porcentajeDescuento: number, amount: number): number {
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    const totalDiscount = descuento * amount;
    const totalPriceWithoutDiscount = precioOriginal * amount;
    return totalPriceWithoutDiscount - totalDiscount;
  }
}
