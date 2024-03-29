import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { SweetAlertResult } from 'sweetalert2';

import { FormCourseComponent } from '../form-course/form-course.component';
import { FormModuleComponent } from '../form-module/form-module.component';
import { FormClassComponent } from '../form-class/form-class.component';
import { IParametersObject } from '../interfaces/IFormCourse.interface';
import { IModule } from '../interfaces/IModule.interface';
import { AppState } from 'src/app/store/app.reducer';
import { viewList } from 'src/app/store/actions/course.actions';
import { ICourse } from '../interfaces/ICourses.interface';
import { BaseClass } from 'src/app/core/base.class';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent extends BaseClass implements OnInit, OnDestroy {
  private store = inject(Store<AppState>);
  $store!: Subscription;
  $refModal!: Subscription;

  form: FormGroup = this.fb.group({
    _id: [],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
  });

  course!: ICourse;
  modules: IModule[] = [];
  modal = {
    course: FormCourseComponent,
    module: FormModuleComponent,
    class: FormClassComponent,
  };
  isExpanded: boolean[] = [];

  ngOnInit(): void {
    this.$store = this.store.select('courseView').subscribe({
      next: ({ course }) => {
        if (course) {
          if (course.modules) this.modules = JSON.parse(JSON.stringify([...course?.modules]));          
          this.form.patchValue(course);
          this.course = course;
        } else {
          this.openModal(this.modal.course);
        }
      },
    });
  }

  ngOnDestroy(): void {
    if (this.$refModal) {
      this.$refModal.unsubscribe();
    }
    this.$store.unsubscribe();
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  openModal(modal: ComponentType<any>, data?: IParametersObject) {
    const refModal = this.dialog.open(modal, {
      data,
      width: '900px',
      height: '100vh'
    });
    refModal.componentInstance.parent = this;
    this.$refModal = refModal.afterClosed().subscribe({
      next: () => {
        if (!this.form.get('_id')?.value) {
          this.changelistView();
        }
      },
    });
  }

  confirmRemoveModule(idCourse: string, idModule: string, indexModule: number) {
    this.messageService.confirmRevomeMessage('info.confirmRemove').then((response: SweetAlertResult) => {
      if (response.isConfirmed) {
        this.deleteModule(idCourse, idModule, indexModule);
      }
    });
  }

  deleteModule(idCourse: string, idModule: string, indexModule: number) {
    this.baseService.deleteMethod(`course/module/${idCourse}/${idModule}`).subscribe({
        next: () => {
        this.modules.splice(indexModule, 1);
        this.messageService.succesMessage('succes.succesRemove');
      },
    });
  }

  confirmRemoveClass(module: IModule, indexClass: number, idClass: string) {
    this.messageService.confirmRevomeMessage('info.confirmRemove').then((response: SweetAlertResult) => {
      if (response.isConfirmed) {
        this.deleteClass(module, indexClass, idClass);
      }
    });
  }

  deleteClass(module: IModule, indexClass: number, idClass: string) {
    this.baseService
      .deleteMethod(`course/class/${this.form.get('_id')?.value}/${module._id}/${idClass}`)
      .subscribe({
        next: () => {
          module.classes.splice(indexClass, 1);
          this.messageService.succesMessage('succes.succesRemove');
        },
      });
  }

  changelistView() {
    this.$store.unsubscribe();
    this.store.dispatch(viewList());
  }
}
