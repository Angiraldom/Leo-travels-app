import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss'],
})
export class FormCourseComponent extends BaseClass implements OnInit{
  private dialogRef = inject(MatDialogRef<this>);
  data: any = inject(MAT_DIALOG_DATA);

  loading = false;
  selectedFiles!: File;
  nameImage: string = '';
  parent!: CreateCourseComponent;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
  });

  ngOnInit(): void {
    if (this.data?.body._id) {
      this.nameImage = this.data.body.namePortada;      
      this.form.patchValue(this.data.body);
    }
  }

  validateAction(){
    if (this.form.invalid) {
      return;
    }
    if (this.data?.body._id) {
      this.updateCourse();
    } else {
      this.saveCourse();
    }
  }

  saveCourse() {
    const body = this.form.getRawValue();
    delete body._id;
    const formData = new FormData();

    formData.append('image', this.selectedFiles);
    formData.append('data', JSON.stringify(body));

    this.baseService.postMethod('course', formData).subscribe({
      next: (res: any) => {
        this.messageService.succesMessage('succes.succesCreate');
        this.form.reset();
        this.parent.form.patchValue({
          ...res['data']
        });
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }

  updateCourse() {
    const body = this.form.getRawValue();
    const idCourse = body._id;
    delete body._id;
    const formData = new FormData();

    formData.append('image', this.selectedFiles);
    formData.append('data', JSON.stringify(body));

    this.baseService.patchMethod(`course/${idCourse}`, formData).subscribe({
      next: (res: any) => {
        this.messageService.succesMessage('succes.succesUpdate');
        this.form.reset();
        this.parent.form.patchValue({
          ...res['data']
        });
        this.dialogRef.close({ refresh: true });
      },
      error: () => this.loading = false
    });
  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files[0];
    this.nameImage = this.selectedFiles.name;
  }
}
