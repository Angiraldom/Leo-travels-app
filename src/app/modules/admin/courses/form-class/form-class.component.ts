import { Component, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrls: ['./form-class.component.scss'],
})
export class FormClassComponent extends BaseClass {
  private dialogRef = inject(MatDialogRef<this>);
  public data: any = inject(MAT_DIALOG_DATA);

  loading = false;
  parent!: CreateCourseComponent;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    url: [''],
    description: [''],
    duration: [''],
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
          this.messageService.succesMessage('succes.succesCreate');
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
          this.messageService.succesMessage('succes.succesUpdate');
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
