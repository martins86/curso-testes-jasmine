import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString',
})
/**
 * Objective: reduce texts with more than 30 characters.
 *
 * Truncate string 15 + ... + 12 = 30 Chars.
 * stringText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
 *
 * @returns `Lorem ipsum dol...piscing elit`
 *
 * @example
 *
 * `<p>{{ stringText | truncateString: 30 : '...' }}</p>`
 */
export class TruncateStringPipe implements PipeTransform {
  transform(stringText: string, maxLength: number, replaceValue: string): any {
    if (stringText.length > maxLength) {
      let lastChars = stringText.length - 15 + replaceValue.length;
      let stringA = stringText.split('').splice(0, 15);
      let stringB = stringText.split('').splice(lastChars, stringText.length);

      return stringA.join('') + replaceValue + stringB.join('');
    } else {
      return stringText;
    }
  }
}
