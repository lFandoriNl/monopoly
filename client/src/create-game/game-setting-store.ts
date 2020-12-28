import { makeAutoObservable } from 'mobx';
import { events } from '../api/io';

class GameSetting {
  gameId = '';
  gameCreated = false;
  countPlayers?: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setGameId(id: string) {
    this.gameId = id;
  }

  setGameCreated(created: boolean) {
    this.gameCreated = created;
  }

  setCountPlayers(count: number) {
    this.countPlayers = count;
  }

  createGame() {
    if (this.countPlayers) {
      events.emit('game.create', { countPlayers: this.countPlayers });
    }
  }
}

export const gameSettingStore = new GameSetting();
