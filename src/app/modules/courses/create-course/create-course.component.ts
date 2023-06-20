import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../interfaces/ICourses.interface';
import { FormCourseComponent } from '../form-course/form-course.component';
import { FormModuleComponent } from '../form-module/form-module.component';
import { FormClassComponent } from '../form-class/form-class.component';
import { IParametersObject } from '../interfaces/IFormCourse.interface';
import { IModule } from '../interfaces/IModule.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { viewList } from 'src/app/store/actions/course.actions';

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
  private store = inject(Store<AppState>);

  modules: IModule[] = [];

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
  });

  modal = {
    course: FormCourseComponent,
    module: FormModuleComponent,
    class: FormClassComponent,
  };

  isExpanded: boolean[] = [];

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  openModal(modal: ComponentType<any>, data?: IParametersObject) {
    const refModal = this.dialog.open(modal, {
      data,
    });
    refModal.componentInstance.parent = this;
  }

  deleteModule(idCourse: string, idModule: string, indexModule: number) {
        this.modules.splice(indexModule, 1);

    // this.baseService.deleteMethod(`class/${idCourse}/${idModule}`).subscribe({
    //   next: () => {
    //     this.modules.splice(indexModule, 1);
    //     console.log('Eliminado exitosamente');
    //   },
    // });
  }

  // deleteClass(idCourse: string, idModule: string, idClass: string, module: IModule, inde) {
  deleteClass(module: IModule, indexClass: number) {
    module.classes.splice(indexClass, 1);
    // this.baseService
    //   .deleteMethod(`class/${idCourse}/${idModule}/${idClass}`)
    //   .subscribe({
    //     next: () => {
    //       // this.modules[indexModule!].classes[indexClass!]
    //       console.log('Eliminado exitosamente');
    //     },
    //   });
  }

  changelistView() {
    this.store.dispatch(viewList());
  }
}
