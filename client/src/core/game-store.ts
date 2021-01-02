import { IGame } from 'shared-types';

import { makeAutoObservable } from 'mobx';

import { CellType, CubesValueType } from 'shared-types';

class Game {
  currentDiceValue: CubesValueType = { firstCube: 0, secondCube: 0 };
  moveCells: CellType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  update(game: IGame) {
    console.log(game.moveCells);
    this.currentDiceValue = game.currentDiceValue;
    this.moveCells = game.moveCells;
  }
}

export const gameStore = new Game();
