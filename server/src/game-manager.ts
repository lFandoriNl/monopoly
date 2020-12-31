import { IGame } from 'shared-types';
import { Game } from './game';

type GameMap = { [key: string]: Game };

export class GameManager {
  gameMap: GameMap = {};

  constructor(raw: string, private saveToDB: (raw: string) => void) {
    this.gameMap = GameManager.deserialize(raw);
  }

  createGame(id: string, game: IGame) {
    this.gameMap[id] = new Game(game);
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
    // const plainGameMap: { [key: string]: IGame } = {};

    // Object.keys(this.gameMap).forEach((key) => {
    //   plainGameMap[key] = this.gameMap[key];
    // });

    this.saveToDB(JSON.stringify(this));
  }

  static deserialize(raw: string) {
    const gameMap: GameMap = {};
    const parsed: { gameMap: { [key: string]: IGame } } = JSON.parse(raw);

    Object.keys(parsed.gameMap).forEach((key) => {
      gameMap[key] = new Game(parsed.gameMap[key]);
    });

    return gameMap;
  }
}
