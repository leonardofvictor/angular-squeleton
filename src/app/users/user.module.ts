import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BsDropdownModule, TypeaheadModule} from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';

import {UserComponent} from './user.component';

import {UserRoutingModule} from './user-routing.module';

import {UserDetailsComponent} from './details/user-details.component';

import {ListComponent} from './list/list.component';
import {UserService} from './user.service';
import {SearchComponent} from '../shared/dropdowns/search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import {DomainService} from "../http_services/domain.service";


@NgModule({
    declarations: [
        UserComponent,
        UserDetailsComponent,
        ListComponent,
        SearchComponent,
        PaginationComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        TypeaheadModule.forRoot(),
        TabsModule.forRoot(),
        UserRoutingModule,
    ],
    providers: [UserService, DomainService],
})

export class UserModule {
}
