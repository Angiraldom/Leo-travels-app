import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-student',
  templateUrl: './menu-student.component.html',
  styleUrls: ['./menu-student.component.scss']
})
export class MenuStudentComponent {
  private state = inject(Store<AppState>);

  user!: IUser;
  $state!: Subscription;
  isMenuOpen = false;

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
