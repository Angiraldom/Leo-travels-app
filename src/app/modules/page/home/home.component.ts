import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConversionesService } from 'src/app/core/services/conversiones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router = inject(Router);
  protected conversionesService = inject(ConversionesService);

  changeRoute(url: string) {
    this.router.navigate([url]);
  }

  changeExternalRoute(url: string) {
    window.open(url, '_blank');
  }
}
