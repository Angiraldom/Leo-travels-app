import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { IClass } from '../../admin/courses/interfaces/IClass.interface';

@Component({
  selector: 'app-watch-class',
  templateUrl: './watch-class.component.html',
  styleUrls: ['./watch-class.component.scss']
})
export class WatchClassComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private baseSerive = inject(BaseService);
  $route!: Subscription;

  idCourse!: string;
  idModule!: string;
  idClass!: string;
  class!: IClass;

  ngOnInit(): void {
    this.$route = this.route.paramMap.subscribe((params: ParamMap) => {
      this.idModule = params.get('idModule') as string;
      this.idCourse = params.get('idCourse') as string;
      this.idClass = params.get('idClass') as string;
      this.getClass();
    });
  }

  getClass() {
    this.baseSerive.getMethod(`course/findClass/${this.idCourse}/${this.idModule}/${this.idClass}`).subscribe({
      next: (res: any) => {
        if (res.data) {
          this.class = res.data;
        } else {
          console.log('No se encontro la clase');
        }
      }
    });
  }
}
