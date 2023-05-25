import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { BaseService } from 'src/app/core/services/base.service';
import { IProduct } from '../interfaces/IProduct.interface';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  private fb = inject(FormBuilder);
  public data: IProduct = inject(MAT_DIALOG_DATA);
  private baseService = inject(BaseService);
  private dialogRef = inject(MatDialogRef<this>);

  form: FormGroup = this.fb.group({
    _id: [],
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: [0, Validators.required],
    discount: [0, Validators.required],
    isCourse: [false, Validators.required],
    weight: [0, Validators.required],
    modules: this.fb.array([], Validators.required)
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
      this.initForm();
    } else {
      this.form.removeControl('modules');
    }
  }

  initForm() {
    if (!this.data?.isCourse) {
      this.form.removeControl('modules');
      return;
    }
    this.form.removeControl('weight');
    this.initModulesAndVideos();
    this.form.get('modules')?.patchValue(this.data.modules);
  }

  initModulesAndVideos() {
    this.data.modules?.forEach((item, index) => {
      this.modules.push(this.controlsModule());
      item.videos?.forEach(() => {
        this.addVideo(index);
      });
    });
  }

  get modules() {
    return this.form.controls["modules"] as FormArray;
  }

  controlsModule() {
    const controls = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      videos: this.fb.array([], Validators.required)
    });
    return controls;
  }

  addModule() {
    this.modules.push(this.controlsModule());
    this.addVideo(this.modules.length - 1);
  }

  deleteModule(index: number) {
    this.modules.removeAt(index);
  }

  getVideos(index: number): FormArray {
    return this.modules.at(index).get('videos') as FormArray;
  }

  addVideo(indexModule: number) {
    const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const fieldsVideos = this.fb.group({
      name: ["", Validators.required],
      url: ["", [Validators.required, Validators.pattern(urlRegex)]],
    });
    this.getVideos(indexModule).push(fieldsVideos);
  }

  deleteVideo(moduleIndex: number, indexVideo: number) {
    this.getVideos(moduleIndex).removeAt(indexVideo);
  }

  resetForm(event: MatSelectChange) {
    if (event.value) {
      this.initFormArrayModuls();
      return;
    }
    this.resetFormArrayModuls();
  }

  resetFormArrayModuls() {
    this.form.addControl('weight', new FormControl(0, Validators.required));
    this.form.removeControl('modules');
    this.form.updateValueAndValidity();
  }

  initFormArrayModuls() {
    this.form.removeControl('weight');
    this.form.addControl('modules', this.fb.array([], Validators.required));
    this.form.updateValueAndValidity();
    this.addModule();
  }

  validateAction() {
    if (this.form.invalid) {
      return;
    }
    if (!this.data) {
      this.saveProduct();
      return
    }
    this.updateProduct();
  }

  updateProduct() {
    const body = this.form.getRawValue();
    this.baseService.patchMethod('product/'+ this.data._id, body).subscribe({
      next: () => { 
        this.dialogRef.close({refresh: true});
        console.log("Actualizo correctamente") 
      }
    });
  }

  saveProduct() {
    const body = this.form.getRawValue();
    this.baseService.postMethod('product', body).subscribe({
      next: () => { 
        this.dialogRef.close({refresh: true});
        console.log("Guardo correctamente") 
      }
    });
  }
}
