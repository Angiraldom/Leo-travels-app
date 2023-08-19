import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/modules/admin/courses/interfaces/ICourses.interface';

@Pipe({
  name: 'completedClass',
  standalone: true,
})
export class CompletedClassPipe implements PipeTransform {
  transform(
    courses: ICourse[] | undefined,
    idCourse: string,
    idModule: string,
    idClass: string
  ): unknown {
    if (!courses) {
      return false;
    }
    const course = courses?.find((itemCourse) => itemCourse._id === idCourse);

    const module = course?.modules?.find(
      (itemModule) => itemModule._id === idModule
    );

    const itemClass = module?.classes.find((item) => item._id === idClass);

    return itemClass?.completed ?? false;
  }
}
