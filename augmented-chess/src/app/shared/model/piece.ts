export class Piece {
    name: string;
    colour: string;
    movement: number;
    hitpoints: number;
    attack: number;
    image: string;
    svg: string;

    constructor(name: string, colour: string, movement: number, hitpoints: number, attack: number, image: string, svg: string) {
        this.name = name;
        this.colour = colour;
        this.movement = movement;
        this.hitpoints = hitpoints;
        this.attack = attack;
        this.image = image;
        this.svg = svg;
    }
}
