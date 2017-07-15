import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'groups/lugbrz/1', pathMatch: 'full'},
    { path: 'services', loadChildren: 'app/services/service.module#ServiceModule' },
    { path: 'groups', loadChildren: 'app/groups/group.module#GroupModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}