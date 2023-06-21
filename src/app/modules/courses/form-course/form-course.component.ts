import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/core/services/base.service';
import { CreateCourseComponent } from '../create-course/create-course.component';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss'],
})
export class FormCourseComponent implements OnInit{
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<this>);
  data: any = inject(MAT_DIALOG_DATA);
  private baseService = inject(BaseService);

  loading = false;
  selectedFiles!: File;
  parent!: CreateCourseComponent;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
  });

  ngOnInit(): void {
    if (this.data?.body._id) {
      this.form.patchValue(this.data.body);
    }
  }

  saveCourse() {
    if (this.form.invalid) {
      return;
    }
    const form = this.form.getRawValue();
    delete form._id;
    this.parent.form.patchValue({
      _id: new Date().getTime().toString(),
      ...form,
    });
    this.dialogRef.close({ refresh: true });

    // const body = this.form.getRawValue();
    // delete body._id;
    // const formData = new FormData();

    // formData.append('image', this.selectedFiles);
    // formData.append('data', JSON.stringify(body));

    // this.baseService.postMethod('course', formData).subscribe({
    //   next: (res: any) => {
    //     console.log('Guardo correctamente');
    //     this.form.reset();
    //     this.dialogRef.close({ refresh: true, form: res['data'] });
    //   },
    //   error: () => this.loading = false
    // });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files[0];
  }
}
