import {Pos} from "./pos";

export class Piece {
    name: string;
    colour: string;
    moveppoints: number;
    hitpoints: number;
    attack: number;
    image: string;
    movement: Pos[];

    constructor(name: string, colour: string, moveppoints: number, hitpoints: number, attack: number, image: string, movement: Pos[]) {
        this.name = name;
        this.colour = colour;
        this.moveppoints = moveppoints;
        this.hitpoints = hitpoints;
        this.attack = attack;
        this.image = image;
        this.movement = movement;
    }
}
