import {Pos} from "./pos";

export class Piece {
  id: number;
  name: string;
  colour: string;
  mp: number;
  hitpoints: number;
  attack: number;
  image: string;
  svg: string;
  movement: Pos[];
  bp: number;
  static id_iterator = 0;
  notation: string;

  constructor(name: string, colour: string, mp: number, hitpoints: number, attack: number, image: string, svg: string, bp: number, movement: Pos[]) {
    this.id = Piece.id_iterator++;
    this.name = name;
    this.colour = colour;
    this.mp = mp;
    this.hitpoints = hitpoints;
    this.attack = attack;
    this.image = image;
    this.svg = svg;
    this.bp = bp;
    this.movement = movement;
    this.notation = this.getNotation(name);
  }

  getNotation(name: string){
      switch(name){
          case "king": return "K";
          case "queen": return "Q";
          case "rook": return "R";
          case "knight": return "N";
          default : return "P";
      }
  }
}
