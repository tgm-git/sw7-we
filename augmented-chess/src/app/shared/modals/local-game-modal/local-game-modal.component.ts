import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';

import { ModalComponent, DialogRef } from 'ngx-modialog';
import { DialogPreset } from 'ngx-modialog/plugins/vex';
import {ArmyService} from "../../services/army.service";
import {Army} from "../../model/army";

@Component({
  selector: 'app-local-game-modal',
  templateUrl: './local-game-modal.component.html',
  styleUrls: ['./local-game-modal.component.css']
})
export class LocalGameModalComponent implements ModalComponent<DialogPreset> {
  public context: DialogPreset;
  public armies: Army[];
  public selectedWhiteArmy: Army;
  public selectedBlackArmy: Army;

  constructor(public dialog: DialogRef<DialogPreset>, public armyService: ArmyService) {
    this.context = dialog.context;
    this.armies = this.armyService.armies;
    this.selectedWhiteArmy = this.armies[0];
    this.selectedBlackArmy = this.armies[0];

    this.context.defaultResult = "default";
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
