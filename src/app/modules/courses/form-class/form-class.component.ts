import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.scss'],
})
export class FormClassComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<this>);
  public data: any = inject(MAT_DIALOG_DATA);

  urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  form: FormGroup = this.fb.group({
    name: ['test', Validators.required],
    url: ['', [Validators.pattern(this.urlRegex)]],
    description: [''],
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  sendData() {
    this.dialogRef.close(this.form);
  }
}
