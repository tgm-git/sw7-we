import {Component, OnInit} from '@angular/core';
import {Cell} from "../shared/model/cell";
import {Piece} from "../shared/model/piece";
import {King} from "../shared/model/pieces/king";
import {Queen} from "../shared/model/pieces/queen";
import {Rook} from "../shared/model/pieces/rook";
import {Knight} from "../shared/model/pieces/knight";
import {Bishop} from "../shared/model/pieces/bishop";
import {Pawn} from "../shared/model/pieces/pawn";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    board: Cell[][];
    whiteArmy: Piece[];
    blackArmy: Piece[];

    constructor() {}

    ngOnInit() {
        this.board = new Array<Array<Cell>>();

        let counter = 0;
        for (let y = 0; y < 8; y++) {
            counter++;
            this.board[y] = new Array<Cell>();
            for (let x = 0; x < 8; x++) {
                const cell = new Cell(x, Math.abs(y - 7), counter % 2 === 0 ? "burlywood" : "darkslategray");
                this.board[y][x] = cell;
                counter++;
            }
        }
        console.log("1")
        this.whiteArmy = this.whiteTestArmy();
        this.blackArmy = this.blackTestArmy();
        console.log("2");
    }

    whiteTestArmy(): Piece[] {
        let pieces = [];

        pieces.push(new King("white"));
        pieces.push(new Queen("white"));
        pieces.push(new Rook("white"));
        pieces.push(new Rook("white"));
        pieces.push(new Knight("white"));
        pieces.push(new Knight("white"));
        pieces.push(new Bishop("white"));
        pieces.push(new Bishop("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));
        pieces.push(new Pawn("white"));

        return pieces;
    }

    blackTestArmy(): Piece[] {
        let pieces = [];

        pieces.push(new King("black"));
        pieces.push(new Queen("black"));
        pieces.push(new Rook("black"));
        pieces.push(new Rook("black"));
        pieces.push(new Knight("black"));
        pieces.push(new Knight("black"));
        pieces.push(new Bishop("black"));
        pieces.push(new Bishop("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));
        pieces.push(new Pawn("black"));

        return pieces;
    }
}
