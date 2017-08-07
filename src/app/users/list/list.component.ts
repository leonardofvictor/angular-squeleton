import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {UserList} from './../user-list';
import {User} from './../user';
import {UserService} from '../../http_services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {
    group: number;
    page: number;
    list: UserList[];
    private subscribe: any;
    baseTitle = 'Usuários';
    userlist: UserList[];

    selectedUser: User[];

    constructor(private userService: UserService,
                private route: ActivatedRoute) {
    }

    getList(page: number): void {
        this.userService.getUsers(page).then(response => this.userlist = response);

        this.userService.getList().then(response => this.list = response);
    }

    ngOnInit(): void {
        this.userlist = [];
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

