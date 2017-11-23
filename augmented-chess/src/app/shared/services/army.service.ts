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
  armies: Army[];

  constructor(private httpService: HttpService) {
    this.armies = [];


    // this.armies = [
    //   {
    //     name: "Penguin of doom!!",
    //     bp: 37,
    //     pieces: [
    //       new King("black"), new Queen("black"),
    //       new Bishop("black"), new Bishop("black"),
    //       new Knight("black"), new Knight("black"),
    //       new Rook("black"), new Rook("black"),
    //       new Pawn("black"), new Pawn("black"),
    //       new Pawn("black"), new Pawn("black"),
    //       new Pawn("black"), new Pawn("black"),
    //       new Pawn("black"), new Pawn("black")
    //     ]
    //   },
    //   {
    //     name: "Army lawl",
    //     bp: 39,
    //     pieces: [
    //       new King("black"), new Queen("black"),
    //       new Bishop("black"), new Bishop("black"),
    //       new Bishop("black"), new Bishop("black"),
    //       new Bishop("black"), new Bishop("black"),
    //       new Bishop("black"), new Bishop("black"),
    //       new Pawn("black"), new Pawn("black"),
    //       new Pawn("black"), new Pawn("black")
    //   ]
    //   },
    //   {
    //     name: "Army 1337",
    //     bp: 12,
    //     pieces: [
    //       new King("black"), new Queen("black"),
    //       new Pawn("black")
    //     ]
    //   }
    // ];
    console.log(JSON.stringify(this.armies));
  }

}
