import { IPlayer, CellPosition } from 'shared';
import { Cube } from './cube';

type PlayerUI = {
  showRollDice: boolean;
  showBuyCompany: boolean;
};

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

  getCurrentCell() {
    return this.moveCells[this.moveCells.length - 1];
  }

  withdraw(money: number) {
    this.balance -= money;
  }

  deposit(money: number) {
    this.balance += money;
  }

  setUI(ui: Partial<PlayerUI>) {
    Object.assign(this, ui);
  }

  resetUI() {
    this.setShowRollDice(false);
    this.setShowBuyCompany(false);
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
