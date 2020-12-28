import { GameType } from 'shared-types';
import { Game } from './game';

type GameMap = { [key: string]: Game };

export class GameManager {
  gameMap: GameMap = {};

  constructor(raw: string, private saveToDB: (raw: string) => void) {
    this.gameMap = GameManager.deserialize(raw);
  }

  createGame(id: string, countPlayers: number) {
    this.gameMap[id] = new Game(countPlayers);
  }

  getGame(id: string) {
    return this.gameMap[id];
  }

  hasGame(id: string) {
    return Boolean(this.gameMap[id]);
  }

  hasFreeGame(id: string) {
    return this.gameMap[id].hasFreeSlot();
  }

  serialize() {
    const plainGameMap: { [key: string]: GameType } = {};

    Object.keys(this.gameMap).forEach((key) => {
      plainGameMap[key] = this.gameMap[key].toPlain();
    });

    this.saveToDB(JSON.stringify(plainGameMap));
  }

  static deserialize(raw: string) {
    const gameMap: GameMap = {};
    const parsed: { [key: string]: GameType } = JSON.parse(raw);

    Object.keys(parsed).forEach((key) => {
      gameMap[key] = Game.fromPlain(parsed[key]);
    });

    return gameMap;
  }
}
