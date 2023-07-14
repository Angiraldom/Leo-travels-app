import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { MesaggeService } from 'src/app/core/services/message.service';
import { CustomValidators } from 'src/app/core/utils/validators';
import { getProfile } from 'src/app/store/actions/user.actions';
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
  private mesaggeService = inject(MesaggeService);

  $store!: Subscription;
  showFormPassword: boolean = false;
  iconLetterName = '';

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
        this.iconLetterName = user.name[0].toUpperCase();
        this.form.patchValue(user);
      }
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  updateProfile() {
    this.baseService.postMethod('user/update', this.form.getRawValue()).subscribe({
      next: (res: any) => {
        this.store.dispatch(getProfile({ user: res.data}));
        this.mesaggeService.succesMessage('succes.userUpdated');
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
        this.mesaggeService.succesMessage('succes.passwordChanged');
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
