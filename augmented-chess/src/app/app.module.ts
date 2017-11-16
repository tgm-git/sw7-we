import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {GameComponent} from './game/game.component';
import {CellComponent} from './game/cell/cell.component';
import {UserService} from "./shared/services/user.service";
import {ManagerComponent} from './manager/manager.component';
import {QueueComponent} from './queue/queue.component';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import {VexModalModule} from "ngx-modialog/plugins/vex";
import {ModalModule} from "ngx-modialog";
import {ArmyService} from "./shared/services/army.service";
import { LocalGameModalComponent } from './shared/modals/local-game-modal/local-game-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    GameComponent,
    CellComponent,
    ManagerComponent,
    QueueComponent,
    LocalGameModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2DragDropModule.forRoot(),
    ModalModule.forRoot(),
    VexModalModule
  ],
  entryComponents: [
    LocalGameModalComponent
  ],
  providers: [
      UserService,
      ArmyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
