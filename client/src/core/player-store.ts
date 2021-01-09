import { CellType, IGame, IPlayer } from 'shared';

import { makeAutoObservable } from 'mobx';

import { gameSettingStore } from '../create-game/game-setting-store';
import { events } from '../api/io';
import { ls } from '../lib/local-storage';

class Player {
  joined = false;
  currentPlayerId? = '';
  currentPlayerName? = '';
  currentMovePlayerId? = '';
  players?: IPlayer[] = [];
  moveCells: CellType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get isCurrentPlayerMove() {
    return this.currentPlayerId === this.currentMovePlayerId;
  }

  setJoined(joined: boolean) {
    this.joined = joined;
  }

  setCurrentPlayerName(name: string) {
    this.currentPlayerName = name;
  }

  addPlayer(player: IPlayer) {
    if (!this.players) {
      this.players = [];
    }

    this.players.push(player);
  }

  joinToGame() {
    const playerId = ls.get('clientId');

    if (typeof playerId === 'string') {
      this.currentPlayerId = playerId;

      events.emit('game.join', {
        gameId: gameSettingStore.gameId,
        playerId: this.currentPlayerId,
        namePlayer: this.currentPlayerName,
      });
    }
  }

  update(game: IGame) {
    const clientId = ls.get('clientId');
    const currentPlayer = game.players?.find(
      (player) => player.id === clientId,
    );
    this.joined = true;
    this.currentPlayerId = currentPlayer?.id;
    this.currentPlayerName = currentPlayer?.name;
    this.currentMovePlayerId = game.currentPlayerId;
    this.players = game.players;
  }
}

export const playerStore = new Player();
