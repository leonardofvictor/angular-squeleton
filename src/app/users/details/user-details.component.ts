import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {UserService} from './../user.service';
import {UserDetails} from './user-details';

@Component({
   selector: 'app-user-details',
   templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit, OnDestroy {

   user: UserDetails[];
   id: number;
   title: 'Detalhes de usuários';
   private subscribe: any;

   constructor(
       private userService: UserService,
       private route: ActivatedRoute) {}

   ngOnInit(): void {
      this.subscribe = this.route.params.subscribe(params => {
         this.id = (params.id !== 'undefined') ? params.id : null;
         this.getUser(this.id);
      });
   }

   getUser(id: number): void {
      this.userService.getDetails(id).then(response => this.user = response);
   }

   ngOnDestroy(): void { this.subscribe.unsubscribe() }


}
