import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../interfaces/ICourses.interface';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  private fb = inject(FormBuilder);
  public data!: ICourse;
  private baseService = inject(BaseService);

  form: FormGroup = this.fb.group({
    _id: [],
    name: ["", Validators.required],
    description: ["", Validators.required],
    price: [0, Validators.required],
    modules: this.fb.array([], Validators.required)
  });

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
      this.initModulesAndVideos();
      this.form.get('modules')?.patchValue(this.data.modules);
    }
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
      url: ["", [Validators.pattern(urlRegex)]],
      description: [""],
    });
    this.getVideos(indexModule).push(fieldsVideos);
  }

  deleteVideo(moduleIndex: number, indexVideo: number) {
    this.getVideos(moduleIndex).removeAt(indexVideo);
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
        console.log("Actualizo correctamente") 
      }
    });
  }

  saveProduct() {
    const body = this.form.getRawValue();
    this.baseService.postMethod('product', body).subscribe({
      next: () => { 
        console.log("Guardo correctamente") 
      }
    });
  }
}
