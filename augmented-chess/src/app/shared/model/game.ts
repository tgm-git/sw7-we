import {Piece} from "./piece";

export class Game {
    phase = "setup"; // "setup" and "play"
    whitePlacementArmy: Piece[];
    blackPlacementArmy: Piece[];
}
