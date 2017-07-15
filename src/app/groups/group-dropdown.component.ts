
import {Component} from '@angular/core';
import { OnInit } from '@angular/core';

import {Group} from './group';
import {GroupService} from './group.service';

@Component({
    selector: 'app-group-list',
    templateUrl: './group-dropdown.component.html',
    providers: [GroupService]
})

export class GroupDropdownComponent implements OnInit {

   groups: Group[];

    constructor(private groupService: GroupService) {}

    getGroups(): void {
        //this.groupService.getGroups().then(groups => this.groups = groups);
    }
    ngOnInit(): void { this.getGroups(); }
}
