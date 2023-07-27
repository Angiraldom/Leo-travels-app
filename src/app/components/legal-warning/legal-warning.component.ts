import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@Component({
  selector: 'app-legal-warning',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, MenuComponent],
  templateUrl: './legal-warning.component.html',
  styleUrls: ['./legal-warning.component.scss']
})
export default class LegalWarningComponent {

}
