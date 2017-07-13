
import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Domain} from './domain';
import {DomainService} from './domain.service';

@Component({
    selector: 'app-domain-list',
    templateUrl: './domain-dropdown.component.html'
})

export class DomainDropdownComponent  implements OnInit {

    domains: Domain[];

    constructor(private domainService: DomainService){}

    ngOnInit(): void {
        this.getDomains();
    }

    getDomains(): void {
        this.domainService.getDomains().then(domains => this.domains = domains);
    }
}
