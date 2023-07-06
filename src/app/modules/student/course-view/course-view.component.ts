import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { IModule } from '../../admin/courses/interfaces/IModule.interface';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private baseSerive = inject(BaseService);
  $route!: Subscription;

  isExpanded: boolean[] = [];
  idCourse!: string;
  course!: ICourse;

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      this.idCourse = params.get('id') as string;
      this.getCourse();
    });
  }

  ngOnDestroy(): void {
    this.$route.unsubscribe();
  }

  changeRoute(idModule: string, idClass: string) {
    this.router.navigate([`estudiante/clase/${this.idCourse}/${idModule}/${idClass}`]);
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  getCourse() {
    this.baseSerive.getMethod(`course/findOne/${this.idCourse}`).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.course = res.data;
        } else {
          console.log('No se encontro el curso');
        }
      }
    });
  }
}
