import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: '**', redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { NewCompComponent} from './new-comp/new-comp.component';
import {NewerCompComponent} from './newer-comp/newer-comp.component';


const routes: Routes = [
  {path: 'newcomp', component: NewCompComponent },
  {path: 'newercomp', component: NewerCompComponent },
  {path: '**', redirectTo: 'newcomp'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> a9b47c1a08924ff97606980159370fd1b6983e07
