import { makeAutoObservable } from 'mobx';
import { events } from '../common/store/io';

class GameSetting {
  gameId = '';
  gameCreated = false;
  countPlayers?: number = 0;

  constructor() {
    makeAutoObservable(this);

    events.on('game.created', ({ id }: { id: string }) => {
      this.gameId = id;
      this.gameCreated = true;
    });
  }

  setGameId(id: string) {
    this.gameId = id;
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
