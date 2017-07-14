import { Injectable } from '@angular/core';


import { Domain } from './domain';
import { DOMAINS } from './mock-domains';

@Injectable()
export class DomainService {
    getDomains(): Promise<Domain[]> {
        return Promise.resolve(DOMAINS);
    }
}
