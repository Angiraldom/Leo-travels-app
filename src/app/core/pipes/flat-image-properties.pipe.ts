import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatImageProperties',
  standalone: true
})
export class FlatImagePropertiesPipe implements PipeTransform {

  transform(value: [{
    key: string;
    url: string;
  }] | undefined): string[] {
    if (!value) {
      return [];
    }
    return value.map((item) => item.url);;
  }

}
