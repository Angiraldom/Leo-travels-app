import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatBadgeModule } from '@angular/material/badge';
import { AppState } from 'src/app/store/app.reducer';
import { SidebarModule } from 'primeng/sidebar';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { deleteProduct } from 'src/app/store/actions/cart.actions';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTooltipModule,
    SidebarModule,
    RouterModule,
    GenericButtonComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  store = inject(Store<AppState>);

  sidebarVisible: boolean = false;

  deleteProduct(product: any) {
    this.store.dispatch(deleteProduct({ reference: '456', product }));
  }
}
