import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UserComponent} from './user.component';

import {UserRoutingModule} from './user-routing.module';

import {UserDetailsComponent} from './details/user-details.component';

import { ListComponent } from './list/list.component';
import {UserService} from './user.service';
import {GroupDropdownComponent} from '../groups/group-dropdown.component';


@NgModule({
    declarations: [
        UserComponent,
        UserDetailsComponent,
        GroupDropdownComponent,
        ListComponent
    ],
    imports: [CommonModule, UserRoutingModule],
    providers:[UserService]
})

export class UserModule {}
