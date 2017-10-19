import {Pos} from "./pos";

export class Piece {
  name: string;
  colour: string;
  moveppoints: number;
  hitpoints: number;
  attack: number;
  image: string;
  svg: string;
  movement: Pos[];
  bp: number;

  constructor(name: string, colour: string, moveppoints: number, hitpoints: number, attack: number, image: string, svg: string, bp: number, movement: Pos[]) {
    this.name = name;
    this.colour = colour;
    this.moveppoints = moveppoints;
    this.hitpoints = hitpoints;
    this.attack = attack;
    this.image = image;
    this.svg = svg;
    this.bp = bp;
    this.movement = movement;
  }
}
