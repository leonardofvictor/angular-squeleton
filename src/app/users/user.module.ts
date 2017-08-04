import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UserComponent} from './user.component';

import {UserRoutingModule} from './user-routing.module';

import {UserDetailsComponent} from './details/user-details.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import {UserService} from './user.service';
import {GroupDropdownComponent} from '../groups/group-dropdown.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {SearchComponent} from '../shared/dropdowns/search/search.component';


@NgModule({
    declarations: [
        UserComponent,
        UserDetailsComponent,
        GroupDropdownComponent,
        ListComponent,
        SearchComponent
    ],
    imports: [CommonModule, UserRoutingModule, FormsModule, TypeaheadModule.forRoot()],
    providers: [UserService]
})

export class UserModule {}
