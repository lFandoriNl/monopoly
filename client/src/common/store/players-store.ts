import { IGame, PlayerType } from 'shared-types';

import { makeAutoObservable } from 'mobx';

import { gameSettingStore } from '../../create-game/game-setting-store';
import { events } from '../../api/io';

class Players {
  joined = false;
  currentPlayerId? = '';
  currentPlayerName? = '';
  players?: PlayerType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setJoined(joined: boolean) {
    this.joined = joined;
  }

  setCurrentPlayerName(name: string) {
    this.currentPlayerName = name;
  }

  addPlayer(player: PlayerType) {
    if (!this.players) {
      this.players = [];
    }

    this.players.push(player);
  }

  joinToGame() {
    const playerId = localStorage.getItem('clientId');

    if (playerId) {
      this.currentPlayerId = playerId;

      events.emit('game.join', {
        gameId: gameSettingStore.gameId,
        playerId: this.currentPlayerId,
        namePlayer: this.currentPlayerName,
      });
    }
  }

  initFrom(game: IGame) {
    const clientId = localStorage.getItem('clientId');
    const currentPlayer = game.players?.find(
      (player) => player.id === clientId,
    );
    this.joined = true;
    this.currentPlayerId = currentPlayer?.id;
    this.currentPlayerName = currentPlayer?.name;
    this.players = game.players;
  }
}

export const playersStore = new Players();
