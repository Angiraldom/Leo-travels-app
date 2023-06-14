import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss']
})
export class FormCourseComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<this>);
  form: FormGroup = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: [0, Validators.required],
  });

  sendData() {
    this.dialogRef.close(this.form.value);
  }

}
