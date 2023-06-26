import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalProducts',
  standalone: true,
})
export class TotalProductsPipe implements PipeTransform {
  transform(products: any[]): number {
    return this.getTotalProducts(products);
  }

  getTotalProducts(products: any[]) {
    const total: number = products.reduce((value, item) => {
      return (value = value + item.amount);
    }, 0);
    return total;
  }
}
