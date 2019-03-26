import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from './models';

@Pipe({
  name: 'formatUser'
})
export class FormatUserPipe implements PipeTransform {

  transform(user: IUser): string {
    return user.name;
  }
}
