import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.scss'],
})
export class FormModuleComponent extends BaseClass implements OnInit {
  private dialogRef = inject(MatDialogRef<this>);
  public data: any = inject(MAT_DIALOG_DATA);

  loading = false;
  parent!: CreateCourseComponent;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.data.body) {
      this.form.patchValue(this.data.body);
    }
  }

  executeAction() {
    if (this.data?.body) {
      this.updateModule();
    } else {
      this.saveModule();
    }
  }

  saveModule() {
    const body = this.form.getRawValue();
    delete body._id;

    this.baseService
      .postMethod(`course/module/${this.data.idCourse}`, body)
      .subscribe({
        next: (res: any) => {
          this.messageService.succesMessage('succes.succesCreate');
          this.form.reset();
          this.parent.modules.push({
            ...res['data'],
          });
          this.dialogRef.close({ refresh: true });
        },
        error: () => (this.loading = false),
      });
  }

  updateModule() {
    const body = this.form.getRawValue();
    body['classes'] = this.parent.modules[this.data.indexModule].classes;
    const idModule = body._id;
    delete body._id;

    this.baseService
      .patchMethod(`course/module/${this.data.idCourse}/${idModule}`, body)
      .subscribe({
        next: () => {
          this.messageService.succesMessage('succes.succesUpdate');
          this.form.reset();
          this.parent.modules[this.data.indexModule!] = {
            ...body,
            _id: idModule,
          };
          this.dialogRef.close({ refresh: true });
        },
        error: () => (this.loading = false),
      });
  }
}
