import {Component, OnInit} from '@angular/core';

import {Group} from './group';
import {GroupService} from './group.service';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {
    title = 'Grupos de Acesso';
    groups: Group[];

    constructor(private groupService: GroupService) {
    }

    getList(): void {
        this.groupService.getGroups().then(groups => this.groups = groups);
    }

    ngOnInit(): void {
        this.getList();
        console.log(this.groups);
    }

}