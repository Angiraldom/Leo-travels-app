import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../interfaces/ICourses.interface';
import { FormCourseComponent } from '../form-course/form-course.component';
import { FormModuleComponent } from '../form-module/form-module.component';
import { FormClassComponent } from '../form-class/form-class.component';
import { IValueObject, IParametersObject, ITypeObject } from '../interfaces/IFormCourse.interface';
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

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    modules: this.fb.array([], Validators.required),
  });

  typesObject: ITypeObject = {
    course: {
      component: FormCourseComponent,
      type: 'course',
      create: ({body}: IParametersObject) => {
        this.form.patchValue(body!);
      },
    },
    module: {
      component: FormModuleComponent,
      type: 'module',
      create: ({body}: IParametersObject) => {
        this.modules.push(body);
      },
      update: ({body, indexModule}: IParametersObject) => {
        if (indexModule !== undefined)
          this.modules.at(indexModule).patchValue(body?.value);
      },
    },
    class: {
      component: FormClassComponent,
      type: 'class',
      create: ({indexModule, body}: IParametersObject) => {
        if (indexModule !== undefined) this.getclasses(indexModule).push(body);
      },
      update: ({body, indexClass, indexModule}: IParametersObject) => {
        if (indexModule !== undefined && indexClass !== undefined)
          this.getclasses(indexModule)
            .at(indexClass)
            .patchValue(body?.value);
      },
    },
  };

  isExpanded: boolean[] = [];

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
      this.initModulesAndclasses();
      this.form.get('modules')?.patchValue(this.data.modules);
    }
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
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

  openModal(object: IValueObject, data?: IParametersObject) {
    this.dialog
      .open(object.component, {
        data: data?.body,
      })
      .afterClosed()
      .subscribe((form) => {
        const obj: IParametersObject = {
          body: form,
          indexModule: data?.indexModule,
          indexClass: data?.indexClass,
        };
        data?.body ? object.update!(obj) : object.create(obj);
      });
  }
}
