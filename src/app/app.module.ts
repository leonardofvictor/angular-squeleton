import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {GroupModule} from './groups/group.module';
import {ServiceModule} from './services/service.module';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './users/user.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        GroupModule,
        ServiceModule,
        UserModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

