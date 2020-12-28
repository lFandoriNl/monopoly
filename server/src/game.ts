import { GameType, PlayerType } from 'shared-types';

export class Game {
  players: PlayerType[] = [];

  constructor(private countPlayers: number) {}

  addPlayer(player: PlayerType) {
    this.players.push(player);
  }

  hasPlayer(id: string) {
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
    const game = new Game(object.countPlayers);
    return game;
  }
}
