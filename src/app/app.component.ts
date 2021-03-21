import { Component } from '@angular/core';
import { Todo } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Array<Todo> = [];

  addTask(todo: Todo) {
    this.tasks.push(todo);
  }

  deleteTask(id: string){
    let arr = [...this.tasks];
    let index = arr.findIndex(el => el.id === parseInt(id))
    arr.splice(index, 1)
    this.tasks = arr;
  }
  callDeleteTask(e){
    this.deleteTask(e)
  }
}
