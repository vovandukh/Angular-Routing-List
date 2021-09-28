import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from './task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() arrTask: Array<ITask> = [];

  public TaskValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  getTask() {
   let  newTask: ITask = {
      id: this.arrTask.length,
      task: this.TaskValue,
      status: false
    }
    this.arrTask.push(newTask)
    this.TaskValue = '';

  }
}
