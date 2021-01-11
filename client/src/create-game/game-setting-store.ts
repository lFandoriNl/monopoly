import { makeAutoObservable } from 'mobx';
import { ls } from '../lib/local-storage';

const chipAnimatedKey = 'chipAnimatedDisabled';

class GameSetting {
  gameId: string = '';
  gameCreated: boolean = false;
  chipAnimatedDisabled: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setGameId(id: string) {
    this.gameId = id;
  }

  setGameCreated(created: boolean) {
    this.gameCreated = created;
  }

  disableChipAnimation = () => {
    this.chipAnimatedDisabled = true;
    ls.set(chipAnimatedKey, true);
  }

  enableChipAnimation = () => {
    this.chipAnimatedDisabled = false;
    ls.remove(chipAnimatedKey);
  }
}

export const gameSettingStore = new GameSetting();
