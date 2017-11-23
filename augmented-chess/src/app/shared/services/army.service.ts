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

@Injectable()
export class ArmyService {

  constructor(private httpService: HttpService) {}

  getArmies (username: string) {

    // todo: map data to pieces
    return this.httpService.getUserArmies(username);
  }
}
