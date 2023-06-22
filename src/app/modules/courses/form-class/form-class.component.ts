import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/core/services/base.service';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.scss'],
})
export class FormClassComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<this>);
  public data: any = inject(MAT_DIALOG_DATA);
  private baseService = inject(BaseService);

  loading = false;
  parent!: CreateCourseComponent;

  urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    url: ['', [Validators.pattern(this.urlRegex)]],
    description: [''],
  });

  ngOnInit(): void {
    if (this.data.body) {
      this.form.patchValue(this.data.body);
    }
  }

  executeAction() {
    if (this.data?.body?._id) {
      this.updateClass();
    } else {
      this.saveClass();
    }
  }

  saveClass() {
    const body = this.form.getRawValue();
    delete body._id;

    this.baseService
      .postMethod(
        `course/class/${this.data.idCourse}/${this.data.idModule}`,
        body
      )
      .subscribe({
        next: (res: any) => {
          console.log('Guardo correctamente');
          this.form.reset();
          this.parent.modules[this.data.indexModule!].classes.push({
            ...res['data'],
          });
          this.dialogRef.close({ refresh: true });
        },
        error: () => (this.loading = false),
      });
  }

  updateClass() {
    const body = this.form.getRawValue();
    const idClass = body._id;
    delete body._id;

    this.baseService
      .patchMethod(
        `course/class/${this.data.idCourse}/${this.data.idModule}/${idClass}`,
        body
      )
      .subscribe({
        next: () => {
          console.log('actualizado correctamente');
          this.form.reset();
          this.parent.modules[this.data.indexModule!].classes[
            this.data.indexClass!
          ] = {
            ...body,
            _id: idClass,
          };
          this.dialogRef.close({ refresh: true });
        },
        error: () => (this.loading = false),
      });
  }
}
