import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GroupComponent} from './group.component';
import { GroupService } from './group.service';
import {GroupRoutingModule} from './group-routing.module';

import {DomainDropdownComponent} from './../domains/domain-dropdown.component';
import {DomainService} from '../domains/domain.service';

@NgModule({
    imports: [CommonModule, FormsModule, GroupRoutingModule],
    declarations: [GroupComponent, DomainDropdownComponent],
    providers: [GroupService, DomainService]
})

export class GroupModule {}
