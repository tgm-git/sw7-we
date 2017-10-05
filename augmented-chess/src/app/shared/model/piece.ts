export class Piece {
    name: string;
    colour: string;
    movement: number;
    hitpoints: number;
    attack: number;
    image: string;

    constructor(name: string, colour: string, movement: number, hitpoints: number, attack: number, image: string) {
        this.name = name;
        this.colour = colour;
        this.movement = movement;
        this.hitpoints = hitpoints;
        this.attack = attack;
        this.image = image;
    }
}
