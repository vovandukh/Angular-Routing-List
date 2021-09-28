import { Component, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../task.interface';

@Component({
  selector: 'app-body-task-list',
  templateUrl: './body-task-list.component.html',
  styleUrls: ['./body-task-list.component.css']
})
export class BodyTaskListComponent implements OnInit {
  @Input() arrTask: ITask[] = [];

  public editText:string = '';
  public displayChanges = { 'editUser' : true};
  public ind!:number;

  constructor() { }

  ngOnInit(): void {
  }
  taskStatus(item: ITask) {
    item.status = !item.status
  }
  deleteTask(id: any) {
    let index = this.arrTask.findIndex(el => el.id === id);
    this.arrTask.splice(index, 1);
  }
  editTask(id: any){
    this.ind = this.arrTask.findIndex(el => el.id === id);
    this.editText = this.arrTask[this.ind].task;
    this.displayChanges = { 'editUser' : false}
  }
  saveEditTask(){
    let newTaskSave:ITask = {
      id: this.arrTask[this.ind].id,
      task: this.editText,
      status: false
    }
    this.arrTask.splice(this.ind,1,newTaskSave);
    this.editText = '';
    this.displayChanges = { 'editUser' : true}
    
  }
}
