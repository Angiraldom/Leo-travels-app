import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { CustomValidators } from 'src/app/core/utils/validators';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private store = inject(Store<AppState>);
  private fb = inject(FormBuilder);
  private baseService = inject(BaseService);

  $store!: Subscription;
  showFormPassword: boolean = false;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    numberDocument: ['']
  });

  formPassword: FormGroup = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', [Validators.required]],
  },
  {
    validators: [
      CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
    ],
  });

  ngOnInit(): void {
    this.$store = this.store.select('profile').subscribe({
      next: (user) => {
        this.form.patchValue(user);
      }
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  updateProfile() {
    this.baseService.postMethod('user/update', this.form.getRawValue()).subscribe({
      next: () => {
        console.log("Actualizacion exitosa");
      }
    });
  }

  changeForm() {
    if (this.showFormPassword) {
      this.showFormPassword = false;
      return;
    }
    this.showFormPassword = true;
  }

  changePassword() {
    const id = this.form.get('_id')?.value;
    const body = {
      actualPassword: this.formPassword.get('currentPassword')?.value,
      newPassword: this.formPassword.get('newPassword')?.value
    }
    this.baseService.postMethod('user/change-password/' + id, body).subscribe({
      next: () => {
        console.log("Actualizacion exitosa");
        this.formPassword.reset();
        this.showFormPassword = false;
      }
    });
  }

  validateAction() {
    if (this.showFormPassword) {
      this.changePassword();
      return;
    }
    this.updateProfile();
  }
}
