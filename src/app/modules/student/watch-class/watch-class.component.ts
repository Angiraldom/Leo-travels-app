import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseService } from 'src/app/core/services/base.service';
import { IClass } from '../../admin/courses/interfaces/IClass.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as actionClass from 'src/app/store/actions/class.actions';

@Component({
  selector: 'app-watch-class',
  templateUrl: './watch-class.component.html',
  styleUrls: ['./watch-class.component.scss']
})
export class WatchClassComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private baseSerive = inject(BaseService);
  private store = inject(Store<AppState>);
  $route!: Subscription;

  idCourse!: string;
  idModule!: string;
  idClass!: string;
  class!: IClass;
  nameModule!: string;

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      this.idModule = params.get('idModule') as string;
      this.idCourse = params.get('idCourse') as string;
      this.idClass = params.get('idClass') as string;
      this.getClass();
    });
  }

  ngOnDestroy(): void {
    this.$route.unsubscribe();
  }

  getClass() {
    this.baseSerive.getMethod(`course/findClass/${this.idCourse}/${this.idModule}/${this.idClass}`).subscribe({
      next: (res: any) => {
        if (Object.keys(res.data).length > 0) {
          this.class = res.data.class;
          this.nameModule = res.data.nameModule;
        } else {
          console.log('No se encontro la clase');
        }
      }
    });
  }

  previousClass() {
    this.store.dispatch(actionClass.previousClass());
  }

  nextClass() {
    this.store.dispatch(actionClass.nextClass());
  }

  completedClass() {
    if (!this.class.completed) {
      this.class.completed = true;
    } else {
      this.class.completed = false;
    }
    this.updateClass({ completed: this.class.completed });
  }

  updateClass(body: { completed: boolean }) {
    this.baseSerive.patchMethod(`course/completedClass/${this.idCourse}/${this.idModule}/${this.idClass}`, body).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        console.log('ocurrio un error al momento de actualizar la clase');
      }
    })
  }
}
