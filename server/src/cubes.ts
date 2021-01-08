import { CubesValueType } from 'shared';
import { getRandomInt } from './lib/random';

export class Cubes {
  static generateCubes(): CubesValueType {
    return {
      firstCube: getRandomInt(1, 7),
      secondCube: getRandomInt(1, 7),
    };
  }
}
