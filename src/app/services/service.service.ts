import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {ServiceList} from './list/service-list';

@Injectable()
/** Dummy version of an authenticated user service */
export class ServiceService {
    private url = 'http://localhost/gerenciador-acessos/public/services';

    constructor(private http: Http) { }

    public getServices(group: number, page: number): Promise<ServiceList[]> {
        return this.http.get(`${this.url}/list/${group}?page=${page}`)
            .toPromise()
            .then(response => response.json().content as ServiceList[])
            .catch(this.handleError);
    }
    public getList(): Promise<ServiceList[]> {
        return this.http.get(`${this.url}`)
            .toPromise()
            .then(response => response.json().content as ServiceList[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}

