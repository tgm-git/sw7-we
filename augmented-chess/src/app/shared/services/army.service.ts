import {Injectable} from '@angular/core';
import {Army} from "../model/army";
import {Piece} from "../model/piece";
import {Pawn} from "../model/pieces/pawn";
import {Rook} from "../model/pieces/rook";
import {Knight} from "../model/pieces/knight";
import {Bishop} from "../model/pieces/bishop";
import {Queen} from "../model/pieces/queen";
import {King} from "../model/pieces/king";
import {HttpService} from "./http.service";
import 'rxjs/add/operator/map';
import {Undefined} from "../model/pieces/undefined";


@Injectable()
export class ArmyService {

  constructor(private httpService: HttpService) {
  }

  getArmies(username: string) {
    // todo: map data to pieces
    return this.httpService.getUserArmies(username)
        .map((a: Army[]) => {
          return this.armyFactory(a);
        });
  }

  saveArmy(username: string, army: Army) {
    return this.httpService.saveArmy(username, army);
  }

  private armyFactory(armies: Army[]) {
    let parsedArmies: Army[] = [];

    armies.forEach((a: Army) => {
      let parsedArmy = new Army(a.name, a.bp, []);

      a.pieces.forEach(p => {
        parsedArmy.pieces.push(this.pieceFactory(p));
      });

      parsedArmies.push(parsedArmy);
    });

    return parsedArmies;
  }

  private pieceFactory(piece: Piece): Piece {
    switch (piece.name) {
      case "bishop":
        return new Bishop(piece.colour, piece);
      case "king":
        return new King(piece.colour, piece);
      case "knight":
        return new Knight(piece.colour, piece);
      case "pawn":
        return new Pawn(piece.colour, piece);
      case "queen":
        return new Queen(piece.colour, piece);
      case "rook":
        return new Rook(piece.colour, piece);
      default:
        return new Undefined();
    }
  }
}
