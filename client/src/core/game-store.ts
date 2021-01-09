import { makeAutoObservable } from 'mobx';

import { IGame, IBoard, IPlayer, CubesValueType } from 'shared';
import { ls } from '../lib/local-storage';

class Game implements IGame {
  currentPlayerId = '';
  countPlayers: number = 0;
  players: IPlayer[] = [];

  currentDiceValue: CubesValueType = { firstCube: 0, secondCube: 0 };
  board: IBoard | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  get joined() {
    return this.currentPlayer?.joined || false;
  }

  get currentPlayer() {
    const playerId = ls.get('clientId');
    return this.players.find((player) => player.id === playerId);
  }

  update(game: IGame) {
    console.log(game.players[0], game.players[1]);

    Object.assign(this, game);
  }
}

export const gameStore = new Game();
