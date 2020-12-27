type Player = {
  name: string;
};

export type GameType = {
  countPlayers: number;
  players: Player[];
};

export class Game {
  players: Player[] = [];

  constructor(private countPlayers: number) {}

  addPlayer({ name }: { name: string }) {
    this.players.push({ name });
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
