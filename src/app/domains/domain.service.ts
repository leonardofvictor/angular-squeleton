import { Injectable } from '@angular/core';
import {Domain} from './domain';

import {DOMAINS} from './mock-domains';

@Injectable()
/** Dummy version of an authenticated user service */


export class DomainService {

    getDomains(): Promise<Domain[]> {
        return Promise.resolve(DOMAINS);
    }

}
