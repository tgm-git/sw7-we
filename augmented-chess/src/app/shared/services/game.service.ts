import { Injectable } from '@angular/core';
import {Game} from "../model/game";
import {Army} from "../model/army";
import {Pawn} from "../model/pieces/pawn";

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
        (<Pawn>p).calculateMovement();
      }
    });
    blackArmy.pieces.forEach(p => {
      p.colour = "black";
      p.image = p.imageBlack;
      if (p.name === "pawn") {
        (<Pawn>p).calculateMovement();
      }
    });

    this.game = new Game(whiteArmy, blackArmy);
  }

  gameStarted() {
    return !!this.game;
  }
}
