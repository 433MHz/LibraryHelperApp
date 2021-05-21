import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() addNewBookStatus = new EventEmitter<boolean>();
  newBook = false;

  makeAddNewBookActive(){
    this.addNewBookStatus.emit(this.newBook);
    this.newBook = !this.newBook
  }

}
