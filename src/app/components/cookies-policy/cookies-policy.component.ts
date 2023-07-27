import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@Component({
  selector: 'app-cookies-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, MenuComponent],
  templateUrl: './cookies-policy.component.html',
  styleUrls: ['./cookies-policy.component.scss']
})
export default class CookiesPolicyComponent {

}
