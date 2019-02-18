import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (Math.sign(value) === 0) {
      return value;
    }
    if (Math.sign(value) === 1) {
      return '+' + value;
    }
    if (Math.sign(value) === -1) {
      return value;
    }
  }

}
