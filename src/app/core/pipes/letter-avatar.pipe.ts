import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterAvatar',
  standalone: true
})
export class LetterAvatarPipe implements PipeTransform {

  transform(name: string): string {
    if (!name || name === '') {
      return '';
    }
    return name[0].toUpperCase();
  }

}
