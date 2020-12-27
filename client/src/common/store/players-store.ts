import { makeAutoObservable } from 'mobx';
import { gameSettingStore } from '../../create-game/game-setting-store';
import { events } from './io';

type Player = {
  name: string;
};

class Players {
  currentPlayerName = '';
  joined = false;
  players: Player[] = [];

  constructor() {
    makeAutoObservable(this);

    events.on('game.joined.self', () => {
      this.joined = true;
    });

    events.on('game.joined', ({ name }: { name: string }) => {
      this.players.push({ name });
    });
  }

  setCurrentPlayerName(name: string) {
    this.currentPlayerName = name;
  }

  joinToGame() {
    events.emit('game.join', {
      id: gameSettingStore.gameId,
      name: this.currentPlayerName,
    });
  }
}

export const playersStore = new Players();
