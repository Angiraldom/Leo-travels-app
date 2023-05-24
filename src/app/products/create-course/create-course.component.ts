import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  private fb = inject(FormBuilder);

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
  
}
