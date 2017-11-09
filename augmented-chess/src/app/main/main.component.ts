import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";
import {
  VEXBuiltInThemes,
  Modal,
  DialogPreset,
  DialogFormModal,
  DialogPresetBuilder
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
            .addCancelButton('Nope!')
            .addOkButton("Okay")
            // .addButton(
            //         'vex-dialog-button-primary vex-dialog-button',
            //         'Maybe?',
            //         (cmp: DialogFormModal, $event: MouseEvent) => cmp.dialog.close('Maybe')
            // )
            .open()
            .then( dialogRef => {
              dialogRef.result
                      .then( res => {
                        console.log("omg, it works!");
                        console.log(res);
                      })
                      .catch(err => {
                        console.log("for some reason this is where it ends up when the user cancels. Oh well, atleast it works");
                      });
            });
  }

  logOut() {
    this.userService.setUsername(null);
    this.router.navigateByUrl('login');
  }
}
