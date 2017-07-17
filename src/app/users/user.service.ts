import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {UserList} from './user-list';
import {UserDetails} from './details/user-details';


@Injectable()
export class UserService {

    private url = 'http://localhost/gerenciador-acessos/public';

    constructor(private http: Http) { }

    public getUsers(group: number, page: number): Promise<UserList[]> {
        return this.http.get(`${this.url}/groups/users/${group}?page=${page}`)
            .toPromise()
            .then(response => response.json().content as UserList[])
            .catch(this.handleError);
    }

    public getDetails(id: number): Promise<UserDetails[]> {
        return this.http.get(`${this.url}/users/show/${id}`)
            .toPromise()
            .then(response => response.json().content as UserDetails[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
