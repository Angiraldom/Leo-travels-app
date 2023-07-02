import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IModule } from 'src/app/modules/courses/interfaces/IModule.interface';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  $route!: Subscription;

  modules: IModule[] = [
    {
      name: 'Modulo 1',
      _id: '',
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
      _id: '',
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
      _id: '',
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

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id') as string;
    });
  }

  ngOnDestroy(): void {
    this.$route.unsubscribe();
  }

  changeRoute(id: string) {
    this.router.navigate([`student/class/${id}`]);
  }

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }
}
