import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { AppState } from 'src/app/store/app.reducer';
import { IUser } from '../../admin/user/interfaces/IUser.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private state = inject(Store<AppState>);

  user!: IUser;
  $state!: Subscription;

  ngOnInit(): void {
    this.$state = this.state.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.$state.unsubscribe();
  }

}
