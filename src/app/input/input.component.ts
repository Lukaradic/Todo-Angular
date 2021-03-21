import { Component, ElementRef, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from "../types"

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  @ViewChild('inputRef') ref: ElementRef
  // @Input() addTask;
  @Output() addEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createTodoObj(text) : Todo{
    return {text: text, id: Date.now()}
  }
  onSubmit(e){
    //  prevent default reload of page
    //  get value of input
    //  create todo object
    //  add the todo to parent array of tasksk
    //  reset value of input
    e.preventDefault()
    let val = this.ref.nativeElement.value;
    if(!val) return null
    let obj = this.createTodoObj(val)
    this.addEmitter.emit(obj)
    this.ref.nativeElement.value = ""
  }

}
