import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
