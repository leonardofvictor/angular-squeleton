import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserList} from './../user-list';
import {User} from './../user';
import {UserService} from '../user.service';
import {UserDropdown} from '../user-dropdown';
import {DomainService} from '../../http_services/domain.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {
    page: number;
    list: UserDropdown[];
    url = 'users/list';
    private subscribe: any;
    baseTitle = 'Usuários';
    userlist: UserList[];
    groups: any[];
    @Input() user: User;

    selectedUser: User[];

    constructor(private userService: UserService,
                private domainService: DomainService,
                private route: ActivatedRoute) {
    }

    getList(page: number): void {
        this.userService.getUsers(page).then(response => this.userlist = response);

        this.userService.getList().then(response => this.list = response);
    }



    ngOnInit(): void {
        this.subscribe = this.route.params.subscribe(params => {
            this.page = (params.page !== 'undefined') ? params.page : 1;
            this.getList(this.page);
        });
    }

    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

    onSelect(user: User[]): void {
        this.selectedUser = user;
    }
}

