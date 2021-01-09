import { makeAutoObservable } from 'mobx';

class GameSetting {
  gameId = '';
  gameCreated = false;

  constructor() {
    makeAutoObservable(this);
  }

  setGameId(id: string) {
    this.gameId = id;
  }

  setGameCreated(created: boolean) {
    this.gameCreated = created;
  }
}

export const gameSettingStore = new GameSetting();
