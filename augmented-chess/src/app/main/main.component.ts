import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";
import {Overlay} from "ngx-modialog";
import {Modal} from "ngx-modialog/plugins/bootstrap";

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
    // this.router.navigateByUrl('game');
    const dialogRef = this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
            .open();
  }

  logOut() {
    this.userService.setUsername(null);
    this.router.navigateByUrl('login');
  }
}
