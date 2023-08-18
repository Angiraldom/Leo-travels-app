import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';
import { IUser } from '../../admin/user/interface/IUser.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private baseSerive = inject(BaseService);
  private store = inject(Store<AppState>);

  $route!: Subscription;
  $profile!: Subscription;

  isExpanded: boolean[] = [];
  idCourse!: string;
  course!: ICourse;
  showSpinner = false;
  user!: IUser;

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCourse = params.get('id') as string;
      this.getCourse();
    });
    this.$profile = this.store.select('profile').subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }

  ngOnDestroy(): void {
    this.$route.unsubscribe();
    this.$profile.unsubscribe();
  }

  changeRoute(idModule: string, idClass: string) {
    this.router.navigate([`estudiante/clase/${this.idCourse}/${idModule}/${idClass}`]);
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  getCourse() {
    this.showSpinner = true;
    this.baseSerive.getMethod(`course/findOne/${this.idCourse}`).subscribe({
      next: (res: any) => {
        this.showSpinner = false;
        if (Object.keys(res.data).length > 0) {
          this.course = res.data;
        } else {
          console.log('No se encontro el curso');
        }
      }, error: () => this.showSpinner = false
    });
  }
}
