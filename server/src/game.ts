import { IGame, PlayerType } from 'shared-types';
import { CubesValueType } from 'shared-types/board/cuber';
import { Player } from './player';

export class Game implements IGame {
  currentPlayerId = '';
  currentDiceValue?: CubesValueType;
  countPlayers: number = 0;
  players: Player[] = [];

  constructor(game: IGame) {
    const players = game.players?.map((player) => new Player(player)) || [];
    Object.assign(this, {
      ...game,
      currentPlayerId: players[0]?.id || '',
      players,
    });
  }

  addPlayer(player: PlayerType) {
    this.players.push(new Player(player));
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
    this.currentDiceValue = this.getPlayer(this.currentPlayerId)?.rollDice();
  }

  static fromPlain(object: IGame) {
    return new Game(object);
  }
}
