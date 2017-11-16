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
import {GameService} from "../shared/services/game.service";

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

  constructor(private router: Router, private userService: UserService, private modal: Modal, private gameService: GameService) {
  }

  ngOnInit() {
    if (!this.userService.getUsername()) {
      this.router.navigateByUrl("login");
    } else {
      this.userName = this.userService.getUsername();
    }
  }

  localGame() {
    new DialogPresetBuilder<DialogPreset>(this.modal)
            .className(this.theme)
            .content(LocalGameModalComponent)
            .message('Choose armies for local game')
            .open()
            .then(dialogRef => {
              // dialogRef.close(true);
              dialogRef.result
                      .then(res => {
                        if (res) {
                          console.log(res);
                          this.gameService.startGame(res.whiteArmy, res.blackArmy);
                          this.router.navigateByUrl("game");
                        } else {
                          console.log("cancel");
                        }
                      });
            });
  }

  logOut() {
    this.userService.setUsername(null);
    this.router.navigateByUrl('login');
  }
}
