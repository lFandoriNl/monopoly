import { makeAutoObservable } from 'mobx';

import { IGame, CubesValueType } from 'shared';

class Game {
  currentDiceValue: CubesValueType = { firstCube: 0, secondCube: 0 };

  constructor() {
    makeAutoObservable(this);
  }

  update(game: IGame) {
    console.log(game.players[0], game.players[1]);
    this.currentDiceValue = game.currentDiceValue;
  }
}

export const gameStore = new Game();
