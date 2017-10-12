import {Piece} from "./piece";

export class Game {
    phase = "setup"; // "setup" and "play"
    whitePlacementArmy: Piece[] = [];
    blackPlacementArmy: Piece[] = [];
    whiteArmy: Piece[] = [];
    blackArmy: Piece[] = [];

    

    constructor () {}

    checkSetupDone() {
        if (this.whitePlacementArmy.length === 0 && this.blackPlacementArmy.length === 0) {
            this.phase = "play";
        }
    }
}
