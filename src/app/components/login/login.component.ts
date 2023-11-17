import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../../core/services/auth.service';
import { getProfile } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/app.reducer';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MenuComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private store = inject(Store<AppState>);

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  sendData() {
    if (this.form.invalid) {
      return;
    }
    this.formatLowerCase();
    this.authService.login(this.form.value).subscribe({
      next: (res) => {
        this.store.dispatch(getProfile({ user: res.data.user }));
        const role = res.data.user.role;
        this.form.reset();
        if (role === 'Admin') {
          this.router.navigateByUrl('admin/usuarios');
        } else {
          this.router.navigateByUrl('estudiante/my-courses');
        }
      }
    });
  }

  formatLowerCase() {
    const email = this.form.get('email')?.value as string;
    this.form.get('email')?.setValue(email.toLowerCase());
  }
}
