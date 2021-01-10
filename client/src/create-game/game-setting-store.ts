import { makeAutoObservable } from 'mobx';
import { ls } from '../lib/local-storage';
import { IGameSettings } from 'shared';

class GameSetting implements IGameSettings {
  gameId = '';
  gameCreated = false;
  chipAnimatedDisabled = false;

  constructor() {
    makeAutoObservable(this);
  }

  setGameId(id: string) {
    this.gameId = id;
  }

  setGameCreated(created: boolean) {
    this.gameCreated = created;
  }

  setDisabledChipAnimation = () => {
    this.chipAnimatedDisabled = true;
    ls.set('chipAnimatedDisabled', 'true');
  }
}

export const gameSettingStore = new GameSetting();
