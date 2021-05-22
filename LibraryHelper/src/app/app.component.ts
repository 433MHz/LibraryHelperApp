import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryHelper';

  actualComponentNumber: number;

  addNewBookNumber = 1;
  findBookNumber = 2;
  addNewUserNumber = 3;
  findUserNumber = 4;
  settingsNumber = 5;

  setNewComponentsStatus(numberToSet){
    this.actualComponentNumber = numberToSet;
  }
}
