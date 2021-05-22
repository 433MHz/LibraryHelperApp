import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './Components/left-menu/left-menu.component';
import { AddNewBookComponent } from './Components/add-new-book/add-new-book.component';
import { FindBookComponent } from './Components/find-book/find-book.component';
import { FindUserComponent } from './Components/find-user/find-user.component';
import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    AddNewBookComponent,
    FindBookComponent,
    FindUserComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
