import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {CoreComponent} from './core/core.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';




@NgModule({
    declarations: [
        AppComponent, CoreComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        CoreModule,
        BsDropdownModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

