export type GameType = {
  countPlayers: number;
};

export class Game {
  constructor(private countPlayers: number) {}

  toPlain() {
    return {
      countPlayers: this.countPlayers,
    };
  }

  static fromPlain(object: GameType) {
    const game = new Game(object.countPlayers);
    return game;
  }
}
