import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IModule } from '../../admin/courses/interfaces/IModule.interface';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.scss']
})
export class SidebarUserComponent {
  private router = inject(Router);

  @Input() idCourse!: string;
  @Input() modules: IModule[] = [
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

  toggleList(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }

  changeRoute(idModule: string, idClass: string) {
    this.router.navigate([`student/class/${this.idCourse}/${idModule}/${idClass}`]);
  }
}
