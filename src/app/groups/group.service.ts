import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {GroupList} from './group-list';


@Injectable()
export class GroupService {

    private url = 'http://localhost/gerenciador-acessos/public/groups/list';

    constructor(private http: Http) { }

    public getGroups(domain: string, page: number): Promise<GroupList[]> {
        return this.http.get(`${this.url}/${domain}?page=${page}`)
            .toPromise()
            .then(response => response.json().content as GroupList[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
