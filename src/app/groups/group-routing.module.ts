import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {GroupComponent} from './group.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'groups/:domain/:page', component: GroupComponent }
    ])],
    exports: [RouterModule]
})
export class GroupRoutingModule {}
