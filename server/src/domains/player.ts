import { IPlayer, CellPosition } from 'shared';
import { Cube } from './cube';

export class Player implements IPlayer {
  id = '';
  name = '';
  color = '';
  moveCells: CellPosition[] = [];
  isReviewBuyCompany = false;
  buyPrice?: number;

  constructor(player: Partial<IPlayer>) {
    Object.assign(this, player);
  }

  setColor(color: IPlayer['color']) {
    this.color = color;
  }

  setMoveCells(cells: CellPosition[]) {
    this.moveCells = cells;
  }

  setReviewBuyCompany(isReview: boolean) {
    this.isReviewBuyCompany = isReview;
  }

  setBuyPrice(price: number) {
    this.buyPrice = price;
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
