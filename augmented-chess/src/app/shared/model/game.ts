import {Piece} from "./piece";
import {Pos} from "./pos";

export class Game {
    phase = "setup"; // "setup" and "play"
    whitePlacementArmy: Piece[] = [];
    blackPlacementArmy: Piece[] = [];
    whiteArmy: Piece[] = [];
    blackArmy: Piece[] = [];

    whiteStartingPos: Pos[] = [

    ];

    constructor () {}

    checkSetupDone() {
        if (this.whitePlacementArmy.length === 0 && this.blackPlacementArmy.length === 0) {
            this.phase = "play";
        }
    }
}
