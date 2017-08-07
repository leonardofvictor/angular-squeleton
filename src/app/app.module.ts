import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';
import {UserModule} from './users/user.module';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';





@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        JsonpModule,
        UserModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}


