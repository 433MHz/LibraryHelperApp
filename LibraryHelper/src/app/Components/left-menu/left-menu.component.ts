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

  @Output() componentsStatusInfo = new EventEmitter<number>();

  activeComponent: number;

  addNewBookNumber = 1;
  findBookNumber = 2;
  addNewUserNumber = 3;
  findUserNumber = 4;
  settingsNumber = 5;

  changeActualComponent(numberToSet){
    this.activeComponent = numberToSet;
    this.emitComponentsStatus()
  }

  emitComponentsStatus(){
    this.componentsStatusInfo.emit(this.activeComponent);
  }

}
