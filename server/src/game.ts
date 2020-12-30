import { GameType, PlayerType } from 'shared-types';

export class Game {
  constructor(
    private countPlayers: number,
    private players: PlayerType[] = [],
  ) {}

  addPlayer(player: PlayerType) {
    this.players.push(player);
  }

  hasPlayer(id: PlayerType['id']) {
    return Boolean(this.players.find((player) => player.id === id));
  }

  hasFreeSlot() {
    return this.countPlayers !== this.players.length;
  }

  toPlain() {
    return {
      countPlayers: this.countPlayers,
      players: this.players,
    };
  }

  static fromPlain(object: GameType) {
    return new Game(object.countPlayers, object.players);
  }
}
