import { IPlayer } from 'shared-types';
import { Cubes } from './cubes';

export class Player implements IPlayer {
  id: string = '';
  name: string = '';

  constructor(player: IPlayer) {
    Object.assign(this, player);
  }

  rollDice() {
    return Cubes.generateCubes();
  }

  toPlain() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  static fromPlain(player: IPlayer) {
    return new Player(player);
  }
}
