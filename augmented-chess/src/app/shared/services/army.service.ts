import {Injectable} from '@angular/core';
import {Army} from "../model/army";
import {Piece} from "../model/piece";
import {Pawn} from "../model/pieces/pawn";
import {Rook} from "../model/pieces/rook";
import {Knight} from "../model/pieces/knight";
import {Bishop} from "../model/pieces/bishop";
import {Queen} from "../model/pieces/queen";
import {King} from "../model/pieces/king";

@Injectable()
export class ArmyService {
    armies: Army[];

    constructor() {
        this.armies = [
            {
                name: "Army 1", bp: 37, pieces: new Array<Piece>(new King("black"), new Queen("black"),
                new Bishop("black"), new Bishop("black"),
                new Knight("black"), new Knight("black"),
                new Rook("black"), new Rook("black"),
                new Pawn("black"), new Pawn("black"),
                new Pawn("black"), new Pawn("black"),
                new Pawn("black"), new Pawn("black"),
                new Pawn("black"), new Pawn("black"))
            },
            {name: "Army 2", bp: 0, pieces: new Array<Piece>()},
            {name: "Army 3", bp: 0, pieces: new Array<Piece>()},
            {name: "Army 4", bp: 0, pieces: new Array<Piece>()}
        ];
    }

}
