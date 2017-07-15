import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent} from './user.component';
import { UserService } from './user.service';
import { GroupService } from './../groups/group.service';
import {UserRoutingModule} from './user-routing.module';

import {GroupDropdownComponent} from './../groups/group-dropdown.component';


@NgModule({
    imports: [CommonModule, FormsModule, UserRoutingModule],
    declarations: [UserComponent, GroupDropdownComponent],
    providers: [UserService, GroupService]
})

export class UserModule {}
