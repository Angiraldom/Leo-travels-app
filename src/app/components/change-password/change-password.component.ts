import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from 'src/app/core/utils/validators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export default class ChangePasswordComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  token = '';
  form: FormGroup = this.fb.group(
    {
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: [
        CustomValidators.MatchValidator('password', 'confirmPassword'),
      ],
    }
  );

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      const token = params.get('token');
      if (!token) {
        this.router.navigateByUrl('login');
      } else {
        this.token = token;
      }
    });
  }

  sendData() {
    if (this.form.invalid) {
      return;
    }
    const { password } = this.form.getRawValue();
    this.authService.login(password).subscribe({
      next: () => {
        console.log('Cambio exitoso');
        this.form.reset();
        this.router.navigateByUrl('login');
      },
      error: () => {
        console.log('Hubo un error');
      },
    });
  }
}
