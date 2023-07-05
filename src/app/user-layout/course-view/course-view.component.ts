import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from 'src/app/modules/courses/interfaces/ICourses.interface';
import { IModule } from 'src/app/modules/courses/interfaces/IModule.interface';

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

  modules: IModule[] = [
    {
      name: 'Modulo 1',
      _id: '1',
      classes: [
        {
          name: 'Clase 1',
          _id: '',
        },
        {
          name: 'Clase 2',
          _id: '',
        },
        {
          name: 'Clase 3',
          _id: '',
        },
        {
          name: 'Clase 4',
          _id: '',
        },
      ],
    },
    {
      name: 'Modulo 1',
      _id: '2',
      classes: [
        {
          name: 'Clase 1',
          _id: '',
        },
        {
          name: 'Clase 2',
          _id: '',
        },
        {
          name: 'Clase 3',
          _id: '',
        },
        {
          name: 'Clase 4',
          _id: '',
        },
      ],
    },
    {
      name: 'Modulo 1',
      _id: '3',
      classes: [
        {
          name: 'Clase 1',
          _id: '',
        },
        {
          name: 'Clase 2',
          _id: '',
        },
        {
          name: 'Clase 3',
          _id: '',
        },
        {
          name: 'Clase 4',
          _id: '',
        },
      ],
    },
  ];
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
    this.router.navigate([`student/class/${this.idCourse}/${idModule}/${idClass}`]);
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
          console.log('No se encontro la clase');
        }
      }
    });
  }
}