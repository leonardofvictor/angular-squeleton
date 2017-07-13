import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'gerenciador-acessos', pathMatch: 'full'},
    { path: 'service', loadChildren: 'app/services/service.module#ServiceModule' },
    { path: 'group', loadChildren: 'app/groups/group.module#GroupModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}