import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastros', pathMatch: 'full'},
    { path: 'cadastros', loadChildren: 'app/app.module#AppModule' },
    { path: 'users', loadChildren: 'app/users/user.module#UserModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { enableTracing: false } )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
