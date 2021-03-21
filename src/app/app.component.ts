import { Component } from '@angular/core';
import { Todo } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Array<Todo> = [
    {
      id: 1,
      text: 'random',
    },
    {
      id: 2,
      text: 'random 2',
    },
  ];

  addTask(todo: Todo) {
    this.tasks.push(todo);
    console.log(this.tasks);
  }

  deleteTask(el: HTMLElement) {
    let id = el.parentElement.id;
    if (id) {
      if (el.classList.contains('list-item-del')) {
        let arr = [...this.tasks];
        let index = arr.findIndex((item) => item.id === parseInt(id));
        arr.splice(index, 1);
        this.tasks = arr;
      }

      console.log(id);
    }
  }
  finishTask(id: string) {
    console.log(id);
  }
}
