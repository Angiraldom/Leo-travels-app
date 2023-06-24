import { Component, OnInit, inject } from '@angular/core';
import { IProduct } from '../../products/interfaces/IProduct.interface';
import { BaseService } from 'src/app/core/services/base.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss'],
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, NgOptimizedImage, MatTooltipModule],
})
export class BuyProductsComponent implements OnInit {
  private baseService = inject(BaseService);
  
  products: any[] = [];
  // products: IProduct[] = [];

  ngOnInit(): void {
    this.baseService.http.get('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.products = response;
      },
    });
    // this.baseService.getMethod('product').subscribe({
    //   next: (response: any) => {
    //     this.products = response.data;
    //   },
    // });
  }
}
