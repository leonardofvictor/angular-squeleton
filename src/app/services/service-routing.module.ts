import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'services', component: ListComponent },
        { path: 'services/create', component: CreateComponent },
        { path: 'services/edit/:id', component: CreateComponent }
    ])],
    exports: [RouterModule]
})
export class ServiceRoutingModule {}