import { Pipe, PipeTransform } from '@angular/core';
import { IModule } from 'src/app/modules/admin/courses/interfaces/IModule.interface';

@Pipe({
  name: 'classProgress',
  standalone: true
})
export class ClassProgressPipe implements PipeTransform {

  transform(value: IModule[]): number {
    const totlaProgress = value.reduce((value, module) => {
      // return value = value + module.classes.length;
      const totalClasse = module.classes.filter((item) => item.completed).length;
      return value = value + totalClasse;
    }, 0);
    return totlaProgress;
  }

}
