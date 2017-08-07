import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {UserService} from '../user.service';
import {UserDetails} from './user-details';
import {Groups} from '../groups';
import {DomainService} from '../../http_services/domain.service';
import {Domains} from '../domains';
import {UserDropdown} from '../user-dropdown';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
   selector: 'app-user-details',
   templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit, OnDestroy {

   user: UserDetails[];
   parents: UserDropdown[];
   groups: Groups[];
   domains: Domains[];
   error: any[];
   success: any[];
   id: number;
   title = 'Detalhes de usuários';
   private subscribe: any;

   constructor(
       private userService: UserService,
       private domainService: DomainService,
       private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.subscribe = this.route.params.subscribe(params => {
         this.id = (params.id !== 'undefined') ? params.id : null;
         this.getDomains();
         this.getParents();
         this.getUser(this.id);
      });
   }

   getUser(id: number): void {
      this.userService.getDetails(id).then(response => this.user = response);
   }

    getGroups(id: number, domain: number): void {
        this.userService.getGroups(id, domain)
            .then(response => this.groups = response);
    }

    getParents(): void {
        this.userService.getList()
            .then(response => this.parents = response);
    }
    saveParent(child, parent): void {
        this.userService.saveParent(child, parent)
            .then(response => this.success = response).catch(response => this.error = response);
    }
    getDomains(): void {
       this.domainService.getList().then(response => this.domains = response);
    }

   ngOnDestroy(): void { this.subscribe.unsubscribe() }


}
