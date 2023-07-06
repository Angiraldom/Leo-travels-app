import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/core/services/base.service';
import { ICourse } from '../../admin/courses/interfaces/ICourses.interface';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  private router = inject(Router);
  private baseService = inject(BaseService);

  course!: ICourse;

  ngOnInit(): void {
    this.getCourse();
  }

  changeRoute(id: string) {
    this.router.navigate([`estudiante/course/${id}`]);
  }

  getCourse() {
    this.baseService.getMethod('course/all-courses').subscribe({
      next: (res: any) => {
        this.course = res.data[0];
      },
      error: () => {
        console.log("Ocurrio un problema al obtener el curso");
      }
    });
  }
}
