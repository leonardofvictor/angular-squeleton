import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {GroupComponent} from './group.component';


@NgModule({
    declarations: [
        GroupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [GroupComponent]
})
export class GroupModule { }