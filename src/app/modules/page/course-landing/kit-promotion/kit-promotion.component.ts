import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConversionesService } from 'src/app/core/services/conversiones.service';

@Component({
  selector: 'app-kit-promotion',
  templateUrl: './kit-promotion.component.html',
  styleUrls: ['./kit-promotion.component.scss']
})
export class KitPromotionComponent implements AfterViewInit {
  private router = inject(Router);
  protected conversionesService = inject(ConversionesService);

  @Output() onAddTravelKit = new EventEmitter();
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    setTimeout(() => {
      this.mainContent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  addTravelKit() {
    this.onAddTravelKit.emit();
  }

  changeRoute() {
    this.router.navigate(['pagar']);
  }
}
