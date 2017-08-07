import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {UserModule} from './users/user.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';






@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        UserModule,
        BsDropdownModule.forRoot(),
        TypeaheadModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

