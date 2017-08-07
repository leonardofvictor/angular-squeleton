import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {UserList} from '../users/user-list';
import {UserDetails} from '../users/details/user-details';


@Injectable()
export class UserService {

    private url = 'http://localhost/gerenciador-acessos/public';

    constructor(private http: Http) { }

    public getUsersByGroup(group: number, page: number): Promise<void|UserList[]> {
        return this.http.get(`${this.url}/groups/users/${group}?page=${page}`)
            .toPromise()
            .then(response => response.json().content as UserList[])
            .catch(this.handleError);
    }

    public getUsers(page: number): Promise<void|UserList[]> {
        if ( page == null ) {
            page = 1;
        }
        return this.http.get(`${this.url}/users/list?page=${page}`)
            .toPromise()
            .then(response => response.json().content as UserList[])
            .catch(this.handleError);
    }
    public getList(): Promise<void|UserList[]> {

        return this.http.get(`${this.url}/users/dropdown`)
            .toPromise()
            .then(response => response.json().content as UserList[])
            .catch(this.handleError);
    }
    public getDetails(id: number): Promise<void|UserDetails[]> {
        return this.http.get(`${this.url}/users/show/${id}`)
            .toPromise()
            .then(response => response.json().content as UserDetails[])
            .catch(this.handleError);
    }

    private handleError(error: any): void {
        console.log('An error occurred', error); // for demo purposes only
        //return Promise.reject(error.message || error);
    }
}
