import { IGame } from 'shared-types';

import { makeAutoObservable } from 'mobx';

import { CubesValueType } from 'shared-types';

class Game {
  currentDiceValue: CubesValueType = { firstCube: 0, secondCube: 0 };

  constructor() {
    makeAutoObservable(this);
  }

  update(game: IGame) {
    console.log(game);
    this.currentDiceValue = game.currentDiceValue;
  }
}

export const gameStore = new Game();
