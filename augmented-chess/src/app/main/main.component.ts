import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";
import {
  VEXBuiltInThemes,
  Modal,
  DialogPreset,
  DialogFormModal,
  DialogPresetBuilder,
  VEXModalContext,
  vexV3Mode,
  providers
} from 'ngx-modialog/plugins/vex';
import {LocalGameModalComponent} from "../shared/modals/local-game-modal/local-game-modal.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = "Main menu";
  inputval = "et eller andet";
  userName: string;
  playerCount = 9001;
  theme: VEXBuiltInThemes = <VEXBuiltInThemes>'default';

  constructor(private router: Router, private userService: UserService, private modal: Modal) {
  }

  ngOnInit() {
    if (!this.userService.getUsername()) {
      this.router.navigateByUrl("login");
    } else {
      this.userName = this.userService.getUsername();
    }
  }

  localGame () {
    new DialogPresetBuilder<DialogPreset>(this.modal)
            .className(this.theme)
            .content(LocalGameModalComponent)
            .message('Ary you coming to the event?')
            .addOkButton('Yep!')
            .addButton(
                    'vex-dialog-button-primary vex-dialog-button',
                    'Maybe?',
                    (cmp: DialogFormModal, $event: MouseEvent) => cmp.dialog.close('Maybe')
            )
            .addCancelButton('Nope!')
            .open();
  }

  logOut() {
    this.userService.setUsername(null);
    this.router.navigateByUrl('login');
  }
}
