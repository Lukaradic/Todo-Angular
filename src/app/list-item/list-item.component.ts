import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item;
  @Input() id;
  @Output() deleteMethod = new EventEmitter();
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkMethod(){
    this.checked = !this.checked
  }
  callDeleteTask(e){
    let id = e.target.closest('li').id;
    this.deleteMethod.emit(parseInt(id))
  }

  //  pronadji nacin da vidis koji je el kliknut precizno
  //  ako je kanta kliknuta odraditi del()
  //  ako je check kliknut odraditi checked()
}
