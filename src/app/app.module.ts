import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {GroupsListComponent} from './groups/group.component';

@NgModule({
  declarations: [
   AppComponent,
   GroupsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,GroupsListComponent]
})
export class AppModule { }
