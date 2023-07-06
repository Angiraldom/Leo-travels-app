import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { clearCart } from 'src/app/store/actions/cart.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  private store = inject(Store<AppState>);
  private router = inject(Router);

  logout() {
    localStorage.clear();
    this.store.dispatch(clearCart());
    this.router.navigate(['login']);
  }
}
