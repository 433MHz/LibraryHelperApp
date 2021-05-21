import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryHelper';

  addNewBookActive = false;

  setNewBookActivity(event: boolean){
    this.addNewBookActive = event;
  }
}
