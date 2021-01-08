import { IPlayer, CellType } from 'shared';
import { Cube } from './cube';

export class Player implements IPlayer {
  id: string = '';
  name: string = '';
  color: string = '';
  moveCells: CellType[] = [];

  constructor(player: Partial<IPlayer>) {
    Object.assign(this, player);
  }

  setColor(color: IPlayer['color']) {
    this.color = color;
  }

  setMoveCells(cells: CellType[]) {
    this.moveCells = cells;
  }

  rollDice() {
    return Cube.generateCubes();
  }

  toPlain() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  static fromPlain(player: IPlayer) {
    return new Player(player);
  }
}
