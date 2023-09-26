import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPromotionsComponent } from 'src/app/shared/header-promotions/header-promotions.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-free-class',
  standalone: true,
  imports: [CommonModule, HeaderPromotionsComponent, FooterComponent, GenericButtonComponent],
  templateUrl: './free-class.component.html',
  styleUrls: ['./free-class.component.scss']
})
export default class FreeClassComponent {

}
