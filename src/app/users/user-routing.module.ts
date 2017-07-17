import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {UserComponent} from './user.component';
import {UserDetailsComponent} from './details/user-details.component';
import {ListComponent} from './list/list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'users', component: UserComponent },
        { path: 'users/list/:group/:page', component: ListComponent},
        { path: 'users/details/:id', component: UserDetailsComponent }
    ])],
    exports: [RouterModule]
})
export class UserRoutingModule {}
