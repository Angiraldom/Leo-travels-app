import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
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

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    numberDocument: ['']
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
    })
  }
}
