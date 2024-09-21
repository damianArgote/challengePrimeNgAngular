import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToString'
})
export class BooleanToStringPipe implements PipeTransform {

  transform(value: boolean, trueText:string = 'Yes', falseText:string = 'No'): string {
    return value ? trueText : falseText;
  }

}
