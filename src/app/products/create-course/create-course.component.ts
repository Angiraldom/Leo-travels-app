import { Component, Inject, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  private fb = inject(FormBuilder);
  public data: {name: string} = inject(MAT_DIALOG_DATA);

  form: FormGroup = this.fb.group({
    name: ["", Validators.required],
    description: ["", Validators.required],
    modules: this.fb.array([])
  });

  get modules() {
    return this.form.controls["modules"] as FormArray;
  }

  addModule() {
    const videos = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      video: this.fb.array([])
    });

    this.modules.push(videos);
  }

  deleteModule(index: number) {
    this.modules.removeAt(index);
  }

  getVideos(index: number): FormArray {
    return this.modules.at(index).get('video') as FormArray;
  }

  addVideo(indexModule: number) {
    const fieldsVideos = this.fb.group({
      name: ["", Validators.required],
      url: ["", Validators.required],
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
      console.log('Guardar en la bd');
      return
    }
    console.log('Editar producto');
  }
}
