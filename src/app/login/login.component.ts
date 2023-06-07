import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  sendData() {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.value).subscribe({
      next: () => {
        console.log('Login exitoso');
        this.form.reset();
        this.router.navigateByUrl('layout');
      },
      error: () => {
        console.log('Contraseña o usuario invalido');
      },
    });
  }
}
