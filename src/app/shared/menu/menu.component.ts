import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { MatBadgeModule } from '@angular/material/badge';
import { SidebarModule } from 'primeng/sidebar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';

import { AppState } from 'src/app/store/app.reducer';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { deleteProduct } from 'src/app/store/actions/cart.actions';
import { TotalValuePipe } from 'src/app/core/pipes/total-values.pipe';
import { TotalProductsPipe } from 'src/app/core/pipes/total-products.pipe';
import { IUser } from 'src/app/modules/admin/user/interface/IUser.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatTooltipModule,
    SidebarModule,
    GenericButtonComponent,
    TotalValuePipe,
    TotalProductsPipe,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  store = inject(Store<AppState>);
  router = inject(Router);

  $store!: Subscription;
  $storeUser!: Subscription;
  isMenuOpen = false;
  sidebarVisible: boolean = false;
  user!: IUser;
  products: any[] = [];

  ngOnInit(): void {
    this.$storeUser = this.store.select('profile').subscribe({
      next: (user) => {
        if (Object.keys(user).length > 0) {
          this.user = user; 
        }
      }
    });
    this.$store = this.store.select('cart').subscribe({
      next: (response) => {
        this.products = response.products;
      }
    });

  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
    this.$storeUser.unsubscribe();
  }

  deleteProduct(product: any) {
    this.store.dispatch(deleteProduct({ reference: '', product }));
  }

  openCart() {
    if (this.products.length === 0) {
      return;
    }
    this.sidebarVisible = true;
  }

  changeRoute() {
    this.router.navigate(['pagar']);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
