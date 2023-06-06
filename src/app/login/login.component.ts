import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BaseService } from '../core/services/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  private fb = inject(FormBuilder);
  private baseService = inject(BaseService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.form.invalid) {
      return;
    }

    this.baseService.postMethod('auth/login', this.form.value).subscribe({
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
