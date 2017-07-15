import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {UserList} from './user-list';
import {User} from './user';
import {UserService} from './user.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit, OnDestroy {
    group: number;
    page: number;
    private subscribe: any;
    title = 'Usuários';
    userlist: UserList[];
    selectedUser: User[];

    constructor(
        private userService: UserService,
        private route: ActivatedRoute) {}

    getList(group: number, page: number): void {
        this.userService.getUsers(group, page).then(response => {
            this.userlist = response;
            console.log(this.userlist);
        } );
    }

    ngOnInit(): void {
        this.userlist = [];
        this.subscribe = this.route.params.subscribe(params => {
            this.group = (params.group !== 'undefined') ? params.group : 1;
            this.page = (params.page !== 'undefined') ? params.page : 1;
            this.getList(this.group, this.page);
        });
    }
    ngOnDestroy(): void {
        this.subscribe.unsubscribe();
    }

    onSelect(user: User[]): void {
        this.selectedUser = user;
    }
}
