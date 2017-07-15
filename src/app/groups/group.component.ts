import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {GroupList} from './group-list';
import {Group} from './group';
import {GroupService} from './group.service';


@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})
@Component({
    selector: 'app-pagination',
    template:  `

    `
})
export class GroupComponent implements OnInit, OnDestroy {
    domain: string;
    page: number;
    private subscribe: any;
    title = 'Grupos de Acesso';
    grouplist: GroupList[];
    selectedGroup: Group[];

    constructor(
        private groupService: GroupService,
        private route: ActivatedRoute) {}

    getList(domain: string, page: number): void {
        this.groupService.getGroups(domain, page).then(response => this.grouplist = response);
    }

    ngOnInit(): void {
        this.grouplist = [];
        this.subscribe = this.route.params.subscribe(params => {
            this.domain = (params.domain !== 'undefined') ? params.domain : 'LUGBRZ';
            this.page = (params.page !== 'undefined') ? params.page : 1;
            this.getList(this.domain, this.page);
        });
    }
    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

    onSelect(group: Group[]): void {
        this.selectedGroup = group;
    }
}
