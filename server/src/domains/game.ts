import { CellPosition, IGame, IPlayer, CubesValueType } from 'shared';

import { Player } from './player';
import { calcCellsPath } from '../lib/calc-cells-path';
import { Board } from './board';

const initMoveCells: CellPosition[] = [{ path: 'top', order: 0 }];

const colors: { [key: number]: string } = {
  0: '#d80606',
  1: '#179cea',
  2: '#fdf801',
  3: '#a602e6',
};

export class Game implements IGame {
  currentPlayerId = '';
  countPlayers: number = 0;
  players: Player[] = [];

  currentDiceValue: CubesValueType = { firstCube: 0, secondCube: 0 };

  constructor(game: Partial<IGame>) {
    const players = game.players?.map((player) => new Player(player)) || [];

    Object.assign(this, {
      ...game,
      currentPlayerId: players[0]?.id || '',
      players,
    });
  }

  startGame() {
    this.currentPlayerId = this.players[0].id;
    this.players[0].setShowRollDice(true);
    this.players.forEach((player) => {
      player.setMoveCells(initMoveCells);
    });
  }

  addPlayer(player: Partial<IPlayer>) {
    const createdPlayer = new Player({
      ...player,
      joined: true,
      color: colors[this.players.length],
    });

    this.players.push(createdPlayer);

    if (this.hasFreeSlot() === false) {
      this.startGame();
    }
  }

  getPlayer(id: IPlayer['id']) {
    return this.players.find((player) => player.id === id)!;
  }

  getCurrentPlayer() {
    return this.getPlayer(this.currentPlayerId);
  }

  getNextPlayer() {
    const indexCurrentPlayer = this.players.findIndex(
      (player) => player.id === this.currentPlayerId,
    );

    if (indexCurrentPlayer + 1 === this.players.length) {
      return this.players[0];
    } else {
      return this.players[indexCurrentPlayer + 1];
    }
  }

  setNextPlayerId() {
    const currentPlayer = this.getCurrentPlayer();
    currentPlayer.resetUI();

    const nextPlayer = this.getNextPlayer();
    nextPlayer.setShowRollDice(true);
    this.currentPlayerId = nextPlayer.id;
  }

  hasPlayer(id: IPlayer['id']) {
    return Boolean(this.players.find((player) => player.id === id));
  }

  hasFreeSlot() {
    return this.countPlayers !== this.players.length;
  }

  buyCompany() {
    const currentPlayer = this.getCurrentPlayer();

    currentPlayer.balance -= currentPlayer.buyPrice;
    currentPlayer.resetUI();

    this.setNextPlayerId();
  }

  rollDice() {
    const currentPlayer = this.getCurrentPlayer();

    this.currentDiceValue = currentPlayer.rollDice();

    const sumDiceValue =
      this.currentDiceValue.firstCube + this.currentDiceValue.secondCube;

    const moveCells = calcCellsPath(currentPlayer.moveCells, sumDiceValue);
    currentPlayer.setMoveCells(moveCells);

    this.executeActions(moveCells);
  }

  executeActions(moveCells: CellPosition[]) {
    const currentCell = moveCells[moveCells.length - 1];

    const cellData = Board.getCellDataByPosition(currentCell);

    if (cellData.type === 'company') {
      const company = Board.getCompanyByPosition(currentCell);
      const currentPlayer = this.getCurrentPlayer();

      currentPlayer.setBuyPrice(company.cost);
      currentPlayer.setUI({ showRollDice: false, showBuyCompany: true });

      return;
    }

    return this.setNextPlayerId();
  }

  static fromPlain(object: IGame) {
    return new Game(object);
  }
}
