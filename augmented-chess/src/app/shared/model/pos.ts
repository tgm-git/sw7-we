export class Pos {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    equal(pos: Pos): boolean {
        return this.x === pos.x && this.y === pos.y;
    }
    relative(dest: Pos) {
        return new Pos(dest.x - this.x, dest.y - this.y);
    }
}
