import { IPlayer, CellType } from 'shared';
import { Cubes } from './cubes';

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
    return Cubes.generateCubes();
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
