import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPromotionsComponent } from 'src/app/shared/header-promotions/header-promotions.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { BaseClass } from 'src/app/core/base.class';
import { FormModalFreeClassComponent } from '../form-modal-free-class/form-modal-free-class.component';

@Component({
  selector: 'app-free-class',
  standalone: true,
  imports: [
    CommonModule,
    HeaderPromotionsComponent,
    FooterComponent,
    GenericButtonComponent,
  ],
  templateUrl: './free-class.component.html',
  styleUrls: ['./free-class.component.scss'],
})
export default class FreeClassComponent extends BaseClass {
  changeExternalRoute(url: string) {
    window.open(url, '_blank');
  }

  openModal() {
    this.dialog.open(FormModalFreeClassComponent);
  }
}
