import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Domains} from '../users/domains';



@Injectable()
export class DomainService {
    private url = 'http://localhost/gerenciador-acessos/public';

    constructor(private http: Http) { }

    public getList(): Promise<Domains[]> {

        return this.http.get(`${this.url}/domains/dropdown`)
            .toPromise()
            .then(response => response.json().content as Domains[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
