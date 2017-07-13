import { Component } from '@angular/core';
import { GroupService } from './group.service';

export class Group {
    id: number;
    name: string;
}

const GROUPS: Group[] = [
];

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})

export class GroupComponent {
    title = 'Grupos de Acesso';
    groups = GROUPS;
    selectedGroup: Group;
    group = '';

    constructor(groupService: GroupService) {
        this.group = groupService.name;
    }


    onSelect(group: Group): void {
        this.selectedGroup = group;
    }
}