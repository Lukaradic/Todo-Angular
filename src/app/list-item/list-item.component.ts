import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item;
  @Input() id;
  @Input() deleteMethod;
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  delete(e){
    console.log(e)
  }


  //  if component checked === true;
  //  add class checked and display green check icon
  //  else nothing

  checkMethod(){
    this.checked = !this.checked
  }
}
