import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@Component({
  selector: 'app-data-treatment',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, MenuComponent],
  templateUrl: './data-treatment.component.html',
  styleUrls: ['./data-treatment.component.scss']
})
export default class DataTreatmentComponent {

}
