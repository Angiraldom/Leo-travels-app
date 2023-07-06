import { Pipe, PipeTransform } from '@angular/core';
import { IModule } from 'src/app/modules/admin/courses/interfaces/IModule.interface';

@Pipe({
  name: 'totalClasses',
  standalone: true
})
export class TotalClassesPipe implements PipeTransform {

  transform(value: IModule[]): number {
    const totlaClasses = value.reduce((value, module) => {
      return value = value + module.classes.length;
    }, 0);
    return totlaClasses;
  }

}
