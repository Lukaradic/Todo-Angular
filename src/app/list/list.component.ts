import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() tasksArr: Array<Todo> = [];

  @Output() listEvent = new EventEmitter<string>();

  callDeleteTask(e): void {
    this.listEvent.emit(e);
  }
  constructor() {}

  ngOnInit(): void {
    console.log(this.tasksArr);
  }




}
