import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export default class ForgotPasswordComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
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
