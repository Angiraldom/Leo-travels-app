import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../interfaces/ICourses.interface';
import { MatDialog } from '@angular/material/dialog';
import { FormCourseComponent } from '../form-course/form-course.component';
import { FormModuleComponent } from '../form-module/form-module.component';
import { ComponentType } from '@angular/cdk/portal';

interface valueObject {
  type: 'course' | 'module',
  component: ComponentType<unknown>,
  create: (data: any) => void,
  update?: (data: any, index: number) => void
}
interface typeObject {
  course: valueObject,
  module: valueObject
}
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  private fb = inject(FormBuilder);
  public data!: ICourse;
  private baseService = inject(BaseService);
  private dialog = inject(MatDialog);

  course = {
    "_id": null,
    "name": "asas",
    "description": "",
    "price": 0,
    "modules": [
      {
        "name": "ella",
        "description": "es",
        "classes": [
          {
            "name": "test",
            "url": "",
            "description": ""
          },
          {
            "name": "test",
            "url": "",
            "description": ""
          },
          {
            "name": "test",
            "url": "",
            "description": ""
          }
        ]
      },
      {
        "name": "ella",
        "description": "es",
        "classes": []
      }
    ]
  };

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['asas', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    modules: this.fb.array([], Validators.required),
  });

  typesObject: typeObject = {
    course: {
      component: FormCourseComponent,
      type: 'course',
      create: (form) => {
        this.form.patchValue(form);
      }
    },
    module: {
      component: FormModuleComponent,
      type: 'module',
      create: (form: FormGroup) => {
        this.modules.push(form)
      },
      update: (data, index) => {
        this.modules.at(index).patchValue(data);
      }
    }
  }

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
      this.initModulesAndclasses();
      this.form.get('modules')?.patchValue(this.data.modules);
    }
  }

  initModulesAndclasses() {
    this.data.modules?.forEach((item, index) => {
      this.modules.push(this.controlsModule());
      item.classes?.forEach(() => {
        this.addclass(index);
      });
    });
  }

  get modules() {
    return this.form.controls['modules'] as FormArray;
  }

  controlsModule() {
    const controls = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      classes: this.fb.array([], Validators.required),
    });
    return controls;
  }

  addModule() {
    this.modules.push(this.controlsModule());
    this.addclass(this.modules.length - 1);
  }

  deleteModule(index: number) {
    this.modules.removeAt(index);
  }

  getclasses(index: number): FormArray {
    return this.modules.at(index).get('classes') as FormArray;
  }

  addclass(indexModule: number) {
    const urlRegex =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    const fieldsclasses = this.fb.group({
      name: ['test', Validators.required],
      url: ['', [Validators.pattern(urlRegex)]],
      description: [''],
    });
    this.getclasses(indexModule).push(fieldsclasses);
  }

  deleteclass(moduleIndex: number, indexclass: number) {
    this.getclasses(moduleIndex).removeAt(indexclass);
  }

  validateAction() {
    if (this.form.invalid) {
      return;
    }
    if (!this.data) {
      this.saveProduct();
      return;
    }
    this.updateProduct();
  }

  updateProduct() {
    const body = this.form.getRawValue();
    this.baseService.patchMethod('product/' + this.data._id, body).subscribe({
      next: () => {
        console.log('Actualizo correctamente');
      },
    });
  }

  saveProduct() {
    const body = this.form.getRawValue();
    this.baseService.postMethod('product', body).subscribe({
      next: () => {
        console.log('Guardo correctamente');
      },
    });
  }

  openModal(object: valueObject, data?: any, index?: number) {
    this.dialog.open(object.component, {
      data
    })
    .afterClosed().subscribe((form) => {
      if (data && index !== undefined) {
        object.update!(form.value, index);
      } else {
        object.create(form);
      }
      console.log(this.form.value);
    });
  }
}
