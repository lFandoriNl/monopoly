import { CellType, IGame, PlayerType } from 'shared-types';
import { CubesValueType } from 'shared-types';
import { calcCellsPath } from './lib/calc-cells-path';
import { Player } from './player';

export class Game implements IGame {
  currentPlayerId = '';
  countPlayers: number = 0;
  players: Player[] = [];
  currentDiceValue: CubesValueType = { firstCube: 0, secondCube: 0 };
  moveCells: CellType[] = [];

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
    this.moveCells = [{ path: 'top', order: 0 }];
  }

  addPlayer(player: PlayerType) {
    this.players.push(new Player(player));

    // if (this.hasFreeSlot() === false) {
    this.startGame();
    // }
  }

  getPlayer(id: PlayerType['id']) {
    return this.players.find((player) => player.id === id);
  }

  hasPlayer(id: PlayerType['id']) {
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

      this.moveCells = calcCellsPath(this.moveCells, sumDiceValue);
    }
  }

  static fromPlain(object: IGame) {
    return new Game(object);
  }
}
