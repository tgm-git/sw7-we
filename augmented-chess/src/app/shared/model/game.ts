import {Piece} from "./piece";
import {Pos} from "./pos";
import {Cell} from "./cell";

export class Game {
    phase = "setup"; // "setup" and "play"
    whitePlacementArmy: Piece[] = [];
    blackPlacementArmy: Piece[] = [];
    whiteArmy: Piece[] = [];
    blackArmy: Piece[] = [];

    whiteStartingPos: Pos[] = [
        new Pos(0, 1), new Pos(1, 1), new Pos(2, 1), new Pos(3, 1), new Pos(4, 1), new Pos(5, 1), new Pos(6, 1), new Pos(7, 1),
        new Pos(0, 0), new Pos(1, 0), new Pos(2, 0), new Pos(3, 0), new Pos(4, 0), new Pos(5, 0), new Pos(6, 0), new Pos(7, 0),
    ];
    blackStartingPos: Pos[] = [
        new Pos(0, 7), new Pos(1, 7), new Pos(2, 7), new Pos(3, 7), new Pos(4, 7), new Pos(5, 7), new Pos(6, 7), new Pos(7, 7),
        new Pos(0, 6), new Pos(1, 6), new Pos(2, 6), new Pos(3, 6), new Pos(4, 6), new Pos(5, 6), new Pos(6, 6), new Pos(7, 6)
    ];

    constructor () {}

    checkSetupDone() {
        if (this.whitePlacementArmy.length === 0 && this.blackPlacementArmy.length === 0) {
            this.phase = "play";
        }
    }
    validSetupPos(colour: string, pos: Pos): boolean {
        if (colour === "white") {
            return !!this.whiteStartingPos.find(p => p.equal(pos));
        }
        return !!this.blackStartingPos.find(p => p.equal(pos));
    }
}
