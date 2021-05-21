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

  @Output() componentsStatusInfo = new EventEmitter<object>();

  componentsStatus = {addNewBookComponent: false, findBookComponent: false, addNewUserComponent: false, findUserComponent:false, settingsComponent:false};

  changeAddNewBookComponent(){
    this.componentsStatus.addNewBookComponent = !this.componentsStatus.addNewBookComponent;
    this.emitComponentsStatus()
  }

  changeFindBookComponent(){
    this.componentsStatus.findBookComponent = !this.componentsStatus.findBookComponent;
    this.emitComponentsStatus()
  }

  changeAddNewUserComponent(){
    this.componentsStatus.addNewUserComponent = !this.componentsStatus.addNewUserComponent;
    this.emitComponentsStatus()
  }

  changeFindUserComponent(){
    this.componentsStatus.findUserComponent = !this.componentsStatus.findUserComponent;
    this.emitComponentsStatus()
  }

  changeSettingsComponent(){
    this.componentsStatus.addNewBookComponent = !this.componentsStatus.addNewBookComponent;
    this.emitComponentsStatus()
  }

  emitComponentsStatus(){
    this.componentsStatusInfo.emit(this.componentsStatus);
  }

}
