import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './phone.interface';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  public icon = {}
  transform(arrPhone: Array<IPhone>, value:any): any {
    if (value == 'firstName') {
     return arrPhone.sort((a, b) => a.firstName.localeCompare(b.firstName))
    }
    if(value == 'lastName'){
      return arrPhone.sort((a, b) => a.lastName.localeCompare(b.lastName))
    } 
    if(value == 'number'){
      return arrPhone.sort((a, b) => Number(a.phoneNumber) - Number(b.phoneNumber))
    } 
    if(value == ''){
      return arrPhone
    }
  }
}
