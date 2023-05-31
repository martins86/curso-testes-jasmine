import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bypassSecurity'
})
export class BypassSecurityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
