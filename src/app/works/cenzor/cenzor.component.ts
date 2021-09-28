import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  public arr: Array<string> = [];
  public InputWords: string = '';
  public textarea: string = '';
  public validInput = { 'is-invalid': false}
  public validTextarea = { 'is-invalid': false }

  constructor() { }
  ngOnInit(): void {
  }

  addWords(): void {
    if (!this.InputWords) {
      this.validInput = { 'is-invalid': true }
      
    } else {
      this.validInput = { 'is-invalid': false }
      this.arr.push(this.InputWords);
      this.InputWords = '';
    }
  }
  reset(){
    this.InputWords = '';
    this.textarea = '';
    this.arr = [];
  }
  cenzor() {
    if (!this.textarea) {
      this.validTextarea = { 'is-invalid': true }
    } else{
      let s = this.textarea.split(' ');
      this.validTextarea = { 'is-invalid': false }
      this.arr.forEach(elem => {
        s.forEach(i => {
          if (elem == i) {
            let star = '';
            for (let i = 0; i < elem.length; i++) {
              star += '*'
            }
            let index: number = s.indexOf(elem);
            s.splice(index, 1, star)
          }
          this.textarea = s.join(' ')
        })
      })
    }
  }

}
