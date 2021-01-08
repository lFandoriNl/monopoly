import { CellType, IGame, IPlayer, CubesValueType } from 'shared';

import { Player } from './player';
import { calcCellsPath } from './lib/calc-cells-path';

const initMoveCells: CellType[] = [{ path: 'top', order: 0 }];

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

    this.players.forEach((player) => {
      player.setMoveCells(initMoveCells);
    });
  }

  addPlayer(player: Partial<IPlayer>) {
    const createdPlayer = new Player(player);
    createdPlayer.setColor(colors[this.players.length]);
    this.players.push(createdPlayer);

    if (this.hasFreeSlot() === false) {
      this.startGame();
    }
  }

  getPlayer(id: IPlayer['id']) {
    return this.players.find((player) => player.id === id);
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

  hasPlayer(id: IPlayer['id']) {
    return Boolean(this.players.find((player) => player.id === id));
  }

  hasFreeSlot() {
    return this.countPlayers !== this.players.length;
  }

  rollDice() {
    const player = this.getPlayer(this.currentPlayerId);

    if (player) {
      this.currentDiceValue = player.rollDice();

      const sumDiceValue =
        this.currentDiceValue.firstCube + this.currentDiceValue.secondCube;

      const moveCells = calcCellsPath(player.moveCells, sumDiceValue);
      player.setMoveCells(moveCells);

      const nextPlayer = this.getNextPlayer();
      this.currentPlayerId = nextPlayer.id;
    }
  }

  static fromPlain(object: IGame) {
    return new Game(object);
  }
}
