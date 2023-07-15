import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/modules/admin/products/interfaces/IProduct.interface';

@Component({
  selector: 'app-description-session',
  templateUrl: './description-session.component.html',
  styleUrls: ['./description-session.component.scss']
})
export class DescriptionSessionComponent {
  @Input() products: IProduct[] = [];
  
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 7000,
  };
}
