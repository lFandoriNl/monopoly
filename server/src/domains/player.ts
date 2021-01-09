import { IPlayer, CellPosition } from 'shared';
import { Cube } from './cube';

export class Player implements IPlayer {
  id = '';
  joined = false;
  name = '';
  color = '';
  balance = 15000;
  isMove = false;
  moveCells: CellPosition[] = [];
  buyPrice = 0;

  showRollDice = false;
  showBuyCompany = false;

  constructor(player: Partial<IPlayer>) {
    Object.assign(this, player);
  }

  setMove(move: boolean) {
    this.isMove = move;
  }

  setMoveCells(cells: CellPosition[]) {
    this.moveCells = cells;
  }

  setBuyPrice(price: number) {
    this.buyPrice = price;
  }

  setShowRollDice(show: boolean) {
    this.showRollDice = show;
  }

  setShowBuyCompany(show: boolean) {
    this.showBuyCompany = show;
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
