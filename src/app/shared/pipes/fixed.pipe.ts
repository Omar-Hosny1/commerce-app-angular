import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed',
})
export class FixedPipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    return value.toFixed();
  }
}
