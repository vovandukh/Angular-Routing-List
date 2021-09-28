import { ThrowStmt } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { IPhone } from './phone.interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  public arrPhone: IPhone[] = [
    {
      id: 0,
      firstName: 'Ivan',
      lastName: 'Ivanov',
      phoneNumber: '0675555555'
    },
    {
      id: 1,
      firstName: 'Petro',
      lastName: 'Petriv',
      phoneNumber: '0733333333'

    },
    {
      id: 2,
      firstName: 'Pavlo',
      lastName: 'Pavliv',
      phoneNumber: '0632222222'
    },
    {
      id: 3,
      firstName: 'Oleg',
      lastName: 'Olegovich',
      phoneNumber: '0674444444'
    },
    {
      id: 4,
      firstName: 'Alisa',
      lastName: 'Olegovna',
      phoneNumber: '0991111111'

    }
  ]
  public inputValue = '';
  public value: any = '';
  public count = 0;
  public FirstName!: string;
  public LastName!: string;
  public PhoneNumber!: string;
  public index!: number;
  public icon = {
    "bi bi-caret-down-fill": false,
    "bi bi-caret-up-fill": false
  };
  public icon1 = {
    "bi bi-caret-down-fill": false,
    "bi bi-caret-up-fill": false
  };
  public icon2 = {
    "bi bi-caret-down-fill": false,
    "bi bi-caret-up-fill": false
  };
  constructor() {

  }

  ngOnInit(): void {

  }
  sort(event: any): void {
    if(event == 'firstName'){
      if (this.count == 0) {
        this.icon = {"bi bi-caret-down-fill": true,"bi bi-caret-up-fill": false} 
        this.value = event;
        this.count = 1;
      } else {
        this.icon = {"bi bi-caret-down-fill": false,"bi bi-caret-up-fill": true}
        this.count = 0
        this.value = '';
        this.arrPhone.reverse()
      }
    }
    if(event == 'lastName'){
      if (this.count == 0) {
        this.icon1 = {"bi bi-caret-down-fill": true,"bi bi-caret-up-fill": false} 
        event = '';
        this.value = event;
        this.count = 1;
      } else {
        this.icon1 = {"bi bi-caret-down-fill": false,"bi bi-caret-up-fill": true}
        this.count = 0
        this.value = '';
        this.arrPhone.reverse()
      }
    }
    if(event == 'number'){
      if (this.count == 0) {
        this.icon2 = {"bi bi-caret-down-fill": true,"bi bi-caret-up-fill": false} 
        event = '';
        this.value = event;
        this.count = 1;
      } else {
        this.icon2 = {"bi bi-caret-down-fill": false,"bi bi-caret-up-fill": true}
        this.count = 0
        this.value = '';
        this.arrPhone.reverse()
      }
    }

  }
  deletePhone(event: number): void {
    this.arrPhone.forEach(elem => {
      if (elem.id == event) {
        let ind = this.arrPhone.findIndex(el => el.id == event);
        this.arrPhone.splice(ind, 1)
      }
    })
  }
  save() {
    let newPhone: IPhone = {
      id: this.arrPhone.length,
      firstName: this.FirstName,
      lastName: this.LastName,
      phoneNumber: this.PhoneNumber
    }
    this.arrPhone.push(newPhone);
    this.FirstName = '';
    this.LastName = '';
    this.PhoneNumber = '';

  }
  edit(event: number) {
    this.arrPhone.forEach(elem => {
      if (elem.id == event) {
        this.FirstName = elem.firstName;
        this.LastName = elem.lastName;
        this.PhoneNumber = elem.phoneNumber;
        this.index = this.arrPhone.findIndex(el => el.id == event);
        console.log(Number(elem.phoneNumber));

      }
    })
  }
  saveEdit() {
    let savePhone: IPhone = {
      id: this.arrPhone.length,
      firstName: this.FirstName,
      lastName: this.LastName,
      phoneNumber: this.PhoneNumber
    }
    this.arrPhone.splice(this.index, 1, savePhone);
    this.FirstName = '';
    this.LastName = '';
    this.PhoneNumber = '';
  }


}
