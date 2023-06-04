import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.scss']
})
export class FormModuleComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<this>);
  public data: any = inject(MAT_DIALOG_DATA);

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    classes: this.fb.array([]),
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
    }
    console.log(this.form.value);

  }

  sendData() {
    console.log(this.form.value);
    this.dialogRef.close(this.form);
  }
}
