import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', loadChildren: 'app/core/core.module#CoreModule' },
    { path: 'domains', loadChildren: 'app/core/core.module#CoreModule' },
    { path: 'groups', loadChildren: 'app/groups/group.module#GroupModule' },
    { path: 'users', loadChildren: 'app/users/user.module#UserModule' },
    { path: 'services', loadChildren: 'app/services/service.module#ServiceModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { enableTracing: false } )],
    exports: [RouterModule]
})
export class AppRoutingModule {}