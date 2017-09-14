import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
=======
import { NewCompComponent } from './new-comp/new-comp.component';
import { NewerCompComponent } from './newer-comp/newer-comp.component';
>>>>>>> a9b47c1a08924ff97606980159370fd1b6983e07

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
=======
    NewCompComponent,
    NewerCompComponent
  ],
  imports: [
    BrowserModule,
>>>>>>> a9b47c1a08924ff97606980159370fd1b6983e07
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
