import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClass } from 'src/app/core/base.class';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';

@Component({
  selector: 'app-form-modal-free-class',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, GenericButtonComponent],
  templateUrl: './form-modal-free-class.component.html',
  styleUrls: ['./form-modal-free-class.component.scss']
})
export class FormModalFreeClassComponent extends BaseClass implements OnInit {
  load = false;

  formSuscribe!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formSuscribe = this.fb.group({
      nombre: ['', Validators.required],
      celular: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      indicativo: ['57', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      autoriza: [false, Validators.required],
    });
  }

  validateInput(name: string) {
    if (
      this.formSuscribe.controls[name].invalid &&
      this.formSuscribe.controls[name].touched
    ) {
      return true;
    }

    return false;
  }

  validateCelIndicativo() {
    if (
      (this.formSuscribe.controls['celular'].invalid &&
        this.formSuscribe.controls['celular'].touched) ||
      (this.formSuscribe.controls['indicativo'].invalid &&
        this.formSuscribe.controls['indicativo'].touched)
    ) {
      return true;
    }

    return false;
  }

  sendEmail() {
    this.load = true;
    const data = this.formSuscribe.getRawValue();
    delete data.autoriza;

    this.baseService.postMethod('user/clase-gratis', data).subscribe((res) => {
      if (res) {
        this.messageService.succesMessage('Envio exitoso.');
        this.load = false;
        this.dialog.closeAll();
      }
    });
  }
}
