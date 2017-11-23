import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import { ModalComponent, DialogRef } from 'ngx-modialog';
import { DialogPreset } from 'ngx-modialog/plugins/vex';
import {ArmyService} from "../../services/army.service";
import {Army} from "../../model/army";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-local-game-modal',
  templateUrl: './local-game-modal.component.html',
  styleUrls: ['./local-game-modal.component.css']
})
export class LocalGameModalComponent implements ModalComponent<DialogPreset> {
  public context: DialogPreset;
  public armies: Army[] = [];
  public selectedWhiteArmy: Army;
  public selectedBlackArmy: Army;
  public anyArmies = false;

  constructor(public dialog: DialogRef<DialogPreset>, public armyService: ArmyService, public userService: UserService) {
    this.context = dialog.context;
    armyService.getArmies(userService.getUsername()).subscribe(
        (armies: Army[]) => {
          console.log(armies);
          this.armies = armies;
          if (this.armies[0]) {
            this.selectedWhiteArmy = this.armies[0];
            this.selectedBlackArmy = this.armies[0];
            this.anyArmies = true;
          }
        }
    );
  }

  start() {
    this.dialog.close({
      "whiteArmy": this.selectedWhiteArmy,
      "blackArmy": this.selectedBlackArmy
    })
  }

  close() {
    this.dialog.close(false);
  }
}
