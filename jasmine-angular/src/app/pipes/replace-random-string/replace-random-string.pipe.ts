import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceRandomString'
})
export class ReplaceRandomStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
