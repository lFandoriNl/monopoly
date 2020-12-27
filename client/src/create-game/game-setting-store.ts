import { makeAutoObservable } from 'mobx';
import { events } from '../common/store/io';

class GameSetting {
  countPlayers?: number = 0;

  constructor() {
    makeAutoObservable(this);
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

export const gameSetting = new GameSetting();
