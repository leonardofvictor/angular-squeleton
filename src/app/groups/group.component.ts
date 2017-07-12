import { Component } from '@angular/core';

export class Group {
    id: number;
    name: string;
}

const GROUPS: Group[] = [
];

@Component({
    selector: 'groups-list',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})
export class GroupComponent {
    title = 'Grupos de Acesso';
    groups = GROUPS;
    selectedGroup: Group;


    onSelect(group: Group): void {
        this.selectedGroup = group;
    }
}