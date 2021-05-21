import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryHelper';

  componentsStatus:{addNewBookComponent: boolean, findBookComponent: boolean, addNewUserComponent: boolean, findUserComponent:boolean, settingsComponent:boolean};


  setNewComponentsStatus(event: {addNewBookComponent: boolean, findBookComponent: boolean, addNewUserComponent: boolean, findUserComponent:boolean, settingsComponent:boolean}){
    this.componentsStatus = event;
  }
}
