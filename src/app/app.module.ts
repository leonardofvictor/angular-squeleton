import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GroupModule} from './groups/group.module';
import {ServiceModule} from './services/service.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        GroupModule,
        ServiceModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

