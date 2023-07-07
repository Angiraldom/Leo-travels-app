import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { clearCart } from 'src/app/store/actions/cart.actions';
import { clearProfile } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {
  private authService = inject(AuthService);
  private store = inject(Store<AppState>);
  private router = inject(Router);

  ngOnInit(): void {
    this.authService.getProfile().subscribe();
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(clearCart());
    this.store.dispatch(clearProfile());
    this.router.navigate(['login']);
  }
}
