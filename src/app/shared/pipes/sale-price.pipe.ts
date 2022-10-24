import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sale',
})
export class SalePipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    const sub = +value * 0.15;
    const result = +value - sub;
    if (result <= 0) {
      return 0;
    }
    return result;
  }
}
