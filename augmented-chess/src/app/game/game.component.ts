import {Component, OnInit} from '@angular/core';
import {Cell} from "../shared/model/cell";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    board: Cell[][];

    constructor() {
    }

    ngOnInit() {
        this.board = new Array<Array<Cell>>();

        let counter = 0;
        for (let y = 0; y < 8; y++) {
            counter++;
            this.board[y] = new Array<Cell>();
            for (let x = 0; x < 8; x++) {
                const cell = new Cell(x, Math.abs(y - 7), counter % 2 === 0 ? "burlywood" : "darkslategray", null);
                this.board[y][x] = cell;
                counter++;
            }
        }
    }
}
