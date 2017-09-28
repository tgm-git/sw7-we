import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {GameComponent} from "./game/game.component";
import {ManagerComponent} from "./manager/manager.component";
import {QueueComponent} from "./queue/queue.component";

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
        path: 'game',
        component: GameComponent
    },
    {
        path: 'manager',
        component: ManagerComponent
    },
    {
        path: 'queue',
        component: QueueComponent
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