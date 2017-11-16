import { Injectable } from '@angular/core';
import {Game} from "../model/game";
import {Army} from "../model/army";
import {Pawn} from "../model/pieces/pawn";
import {Pos} from "../model/pos";

@Injectable()
export class GameService {
  game: Game;

  constructor() {
  }

  startGame(whiteArmy: Army, blackArmy: Army) {
    whiteArmy.pieces.forEach(p => {
      p.colour = "white";
      p.image = p.imageWhite;
      if (p.name === "pawn") {
        console.log(p.movement);
        (<Pawn>p).calculateMovement();
        console.log(p.movement);
      }
    });
    blackArmy.pieces.forEach(p => {
      p.colour = "black";
      p.image = p.imageBlack;
      if (p.name === "pawn") {
        // (<Pawn>p).calculateMovement();
      }
    });

    this.game = new Game(whiteArmy, blackArmy);
  }

  gameStarted() {
    return !!this.game;
  }
}
