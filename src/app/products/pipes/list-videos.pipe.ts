import { Pipe, PipeTransform } from '@angular/core';
import { FormArray } from '@angular/forms';

@Pipe({
  name: 'listVideos'
})
export class ListVideosPipe implements PipeTransform {

  transform(moduleIndex: number, modules: FormArray<any>) {
    const form = modules.at(moduleIndex).get('video') as FormArray;
    return form.controls;
  }

}
