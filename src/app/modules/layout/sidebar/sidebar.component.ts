import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { clearCart } from 'src/app/store/actions/cart.actions';
import { AppState } from 'src/app/store/app.reducer';
import { CommonModule } from '@angular/common';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { clearProfile } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppState>);
  private router = inject(Router);

  user!: IUser;
  $state!: Subscription;

  logout() {
    localStorage.clear();
    this.store.dispatch(clearCart());
    this.store.dispatch(clearProfile());
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.$state = this.store.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.$state.unsubscribe();
  }
}
