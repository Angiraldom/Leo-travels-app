import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/material/material.module';
import { AppState } from 'src/app/store/app.reducer';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppState>);
  private authService = inject(AuthService);

  user!: IUser;
  $state!: Subscription;

  logout() {
    this.authService.validateLogout();
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
