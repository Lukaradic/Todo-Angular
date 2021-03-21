import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() tasksArr: Array<Todo> = [];
  @Output() deleteEmmiter = new EventEmitter()
  constructor() {}

  ngOnInit(): void {
    console.log(this.tasksArr);
  }

  deleteMethod(e) {
    this.deleteEmmiter.emit(e.target)
  }
}
