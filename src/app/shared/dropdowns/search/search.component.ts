import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {TypeaheadMatch} from 'ngx-bootstrap/typeahead';
import {UserService} from '../../../users/user.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    public asyncSelected: string;
    public typeaheadLoading: boolean;
    public typeaheadNoResults: boolean;
    public dataSource: Observable<any>;
    public usersList: any[];
    public user: any;
    public btnDisable = true;

    constructor(private userService: UserService) {
        this.userService.getList().then(users => this.usersList = users);
        this.dataSource = Observable
            .create((observer: any) => {
                observer.next(this.asyncSelected);
            })
            .mergeMap((token: string) => this.getUserAsObservable(token));
    }

    public getUserAsObservable(token: string): Observable<any> {
        const query = new RegExp(token, 'ig');
        return Observable.of(
            this.usersList.filter((user: any) => {
                return query.test(user.name);
            })
        );
    }
    public changeTypeaheadLoading(e: boolean): void {
        this.typeaheadLoading = e;
    }
    public changeTypeaheadNoResults(e: boolean): void {
        this.typeaheadNoResults = e;
    }

    public typeaheadOnSelect(e: TypeaheadMatch): void {
        this.btnDisable = false;
        this.userService.getDetails(e.item.id).then(user => this.user = user);
    }

}
