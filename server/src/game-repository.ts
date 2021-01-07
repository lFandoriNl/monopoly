import fs from 'fs';
import { IGame } from 'shared-types';
import { Service } from 'typedi';
import { Game } from './game';

type GameMap = { [key: string]: Game };

@Service()
export class GameRepository {
  cache: GameMap = {};
  constructor() {
    this.deserialize();
  }

  findById(id: string): Game | undefined {
    return this.cache[id];
  }

  save(id: string, game: Game) {
    this.cache[id] = game;
    this.saveToFile();
  }

  deserialize() {
    const gameMap: GameMap = {};
    const parsed: { gameMap: { [key: string]: IGame } } = JSON.parse(
      this.readFromFile(),
    );

    Object.keys(parsed.gameMap).forEach((key) => {
      gameMap[key] = new Game(parsed.gameMap[key]);
    });
    this.cache = gameMap;
  }

  readFromFile() {
    try {
      const db = fs.readFileSync('db.json', 'utf8');
      return db;
    } catch (error) {
      return '{"gameMap":{}}';
    }
  }

  saveToFile() {
    const raw = JSON.stringify(this.cache);
    fs.writeFile('db.json', raw, (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
}
