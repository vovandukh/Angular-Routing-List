import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './phone.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Array<IPhone>, value: string): IPhone[] {
    if (!value) {
      return arr
    }
    return arr.filter(elem => {
      if (elem.phoneNumber.includes(value)) {
        return elem.phoneNumber.includes(value)
      } else {
        return elem.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      }
    })

  }
}


