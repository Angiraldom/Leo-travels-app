import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';
import { IClass } from '../../admin/courses/interfaces/IClass.interface';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.scss'],
})
export class SidebarUserComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private baseSerive = inject(BaseService);
  private store = inject(Store<AppState>);

  @Input() idCourse!: string;
  @Input() activeClass!: IClass;
  @Input() course!: ICourse;
  @Output() onChangeClass = new EventEmitter();

  $store!: Subscription;
  isExpanded: boolean[] = [];
  currentClass: string[] = [];

  ngOnInit(): void {
    this.getCourse();

    this.$store = this.store.select('activeClass').subscribe({
      next: ({ typeSelection }) => {
        if (typeSelection !== '') {
          this.validateChangeClass(typeSelection);
        }
      },
    });
  }

  ngOnDestroy(): void {
    this.$store.unsubscribe();
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  changeRoute(idModule: string, idClass: string) {
    this.router.navigate([
      `estudiante/clase/${this.idCourse}/${idModule}/${idClass}`,
    ]);
  }

  getCourse() {
    this.baseSerive.getMethod(`course/findOne/${this.idCourse}`).subscribe({
      next: (res: any) => {
        if (Object.keys(res.data).length > 0) {
          this.course = res.data;
        } else {
          console.log('No se encontro el curso');
        }
      },
    });
  }

  validateChangeClass(typeSelection: string) {
    const { indexClass, indexModule } = this.getModuleAndClassIndex();
    if (typeSelection === 'next') {
      this.changeClass(indexClass + 1, indexModule, indexModule + 1, 'next');
    }
    if (typeSelection === 'previous') {
      this.changeClass(indexClass - 1, indexModule, indexModule -1, 'previous');
    }
  }

  getModuleAndClassIndex() {
    let indexClass!: number;
    const indexModule = this.course?.modules?.findIndex((itemModule) => {
      indexClass = itemModule.classes.findIndex(
        (itemClass) => itemClass._id === this.activeClass._id
      );
      if (indexClass >= 0) {
        return true;
      }
      return undefined;
    });
    return {
      indexClass,
      indexModule,
    };
  }

  changeClass(indexClass: number, currentModule: number, changeModule: number, type: string): void {
    let module = this.course.modules[currentModule];
    
    let newclass = module.classes[indexClass];

    if (!newclass) {
      module = this.course.modules[changeModule];
      if (!module) {
        return;
      }
      if (type === 'next') {
        newclass = module.classes[0];
      } else {
        newclass = module.classes[module.classes.length - 1];
      }
    }
    this.changeRoute(module._id, newclass._id);
  }
}
