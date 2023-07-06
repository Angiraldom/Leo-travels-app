import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseService } from 'src/app/core/services/base.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private fb = inject(FormBuilder);
  private baseService = inject(BaseService);

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  ngOnInit(): void {
    // Escuchar el store para obtener todos los datos del usuario.
  }

  updateProfile() {
    this.baseService.postMethod('', this.form.getRawValue()).subscribe({
      next: () => {
        console.log("Actualizacion exitosa");
      }
    })
  }
}
