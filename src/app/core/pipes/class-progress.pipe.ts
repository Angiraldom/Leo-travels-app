import { Pipe, PipeTransform } from '@angular/core';
import { IModule } from 'src/app/modules/admin/courses/interfaces/IModule.interface';

@Pipe({
  name: 'classProgress',
  standalone: true
})
export class ClassProgressPipe implements PipeTransform {

  transform(value: IModule[]): number {
    let totalClasses = 0;
    const totlaProgress = value.reduce((value, module) => {
      totalClasses += module.classes.length;
      const totalClasse = module.classes.filter((item) => item.completed).length;
      return value = value + totalClasse;
    }, 0);    
    return Math.round((100 / totalClasses) * totlaProgress);
  }

}
