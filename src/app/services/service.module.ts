import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ServiceComponent} from './service.component';


@NgModule({
    declarations: [
        ServiceComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [ServiceComponent]
})
export class ServiceModule { }