import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDiscount',
  standalone: true
})
export class CalculateDiscountPipe implements PipeTransform {

  transform(precioOriginal: number, porcentajeDescuento: number, amount: number): number {
    precioOriginal *= amount;
    porcentajeDescuento *= amount;
    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    return descuento;
  }

}
