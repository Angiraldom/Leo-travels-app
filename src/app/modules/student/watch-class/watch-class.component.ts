import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { BaseService } from 'src/app/core/services/base.service';
import { IClass } from '../../admin/courses/interfaces/IClass.interface';
import { AppState } from 'src/app/store/app.reducer';
import * as actionClass from 'src/app/store/actions/class.actions';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { getProfile } from 'src/app/store/actions/user.actions';

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
  $profile!: Subscription;
  
  idCourse!: string;
  idModule!: string;
  idClass!: string;
  class!: IClass;
  nameModule!: string;
  nameCourse!: string;
  showSpinner = false;
  isCompletedClass = false;
  user!: IUser;

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      this.idModule = params.get('idModule') as string;
      this.idCourse = params.get('idCourse') as string;
      this.idClass = params.get('idClass') as string;
      this.getClass();
    });

    this.$profile = this.store.select('profile').subscribe({
      next: (user) => {
        this.user = structuredClone(user);
      }
    });
  }

  ngOnDestroy(): void {
    this.$route.unsubscribe();
  }

  getClass() {
    this.showSpinner = true;
    this.baseSerive.getMethod(`course/findClass/${this.idCourse}/${this.idModule}/${this.idClass}`).subscribe({
      next: (res: any) => {
        this.showSpinner = false;
        if (Object.keys(res.data).length > 0) {
          this.class = res.data.class;
          this.nameModule = res.data.nameModule;
          this.nameCourse = res.data.nameCourse;
          this.setValueCompletedClass();
        }
      }, error: () => this.showSpinner = false
    });
  }

  previousClass() {
    this.store.dispatch(actionClass.previousClass());
  }

  nextClass() {
    this.store.dispatch(actionClass.nextClass());
  }

  completedClass() {
    const itemClass = this.findClass();
    if (!this.isCompletedClass) {
      this.isCompletedClass = true;
    } else {
      this.isCompletedClass = false;
    }
    if (itemClass) itemClass.completed = this.isCompletedClass;
  
    this.store.dispatch(getProfile({ user: this.user }));
    this.updateClass({ completed: this.isCompletedClass });
  }

  updateClass(body: { completed: boolean }) {
    this.baseSerive.patchMethod(`user/completedClass/${this.idCourse}/${this.idModule}/${this.idClass}`, body).subscribe();
  }

  /**
   * Set the value for the variable completed class
   */
  setValueCompletedClass() {
    const itemClass = this.findClass();
    if (itemClass) {
      this.isCompletedClass = itemClass.completed;
    }
  }

  findClass() {
    const course = this.user.courses?.find((itemCourse) => itemCourse._id === this.idCourse);

    const module = course?.modules?.find((itemModule) => itemModule._id === this.idModule);

    const itemClass = module?.classes.find((item) => item._id === this.idClass);

    return itemClass;
  }
}
