
import {Component} from '@angular/core';
import { OnInit } from '@angular/core';

import {GroupService} from './group.service';

@Component({
    selector: 'app-group-list',
    templateUrl: './group-dropdown.component.html',
    providers: [GroupService]
})

export class GroupDropdownComponent implements OnInit {

   list: any[];

    constructor(private groupService: GroupService) {}

    getGroups(): void {
        this.groupService.getList().then(groups => this.list = groups);
    }
    ngOnInit(): void { this.getGroups(); }
}
