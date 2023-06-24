import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalValue',
  standalone: true
})
export class TotalValuePipe implements PipeTransform {

  transform(products: any[]): number {
    return this.getTotalValue(products);
  }

  getTotalValue(products: any[]) {
    const total: number = products.reduce((value, item) => {
      const price = item.price * item.amount;
      return value = price + value;
    }, 0)
    return total;
  }

}
