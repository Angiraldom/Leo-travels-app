import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/core/services/base.service';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.scss'],
})
export class FormModuleComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<this>);
  public data: any = inject(MAT_DIALOG_DATA);
  private baseService = inject(BaseService);

  loading = false;
  parent!: CreateCourseComponent;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    classes: this.fb.array([]),
  });

  ngOnInit(): void {
    if (this.data.body) {
      this.form.patchValue(this.data.body);
    }
  }

  executeAction() {
    if (this.data?.body?._id) {
      this.updateModule();
    } else {
      this.saveModule();
    }
  }

  saveModule() {
    const data = this.form.getRawValue();
    delete data._id;
    this.parent.modules.push({
      _id: new Date().getTime().toString(),
      ...data
    });
    this.dialogRef.close({refresh: true});

    // const body = this.form.getRawValue();
    // delete body._id;

    // this.baseService.postMethod(`course/module/${this.data.idCourse}`, body).subscribe({
    //   next: (res: any) => {
    //     console.log('Guardo correctamente');
    //     this.form.reset();
    //     this.dialogRef.close({ refresh: true, form: res.data });
    //   },
    //   error: () => this.loading = false
    // });
  }

  updateModule() {
    const data = this.form.getRawValue();
    delete data._id;
    this.parent.modules[this.data.indexModule!] = {
      _id: new Date().getTime().toString(),
      ...data
    };
    this.dialogRef.close({refresh: true});
  }
}
