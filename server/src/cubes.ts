import { CubesValueType } from 'shared-types/board/cuber';
import { getRandomInt } from './lib/get-random-value';

export class Cubes {
  static generateCubes(): CubesValueType {
    return {
      firstCube: getRandomInt(1, 7),
      secondCube: getRandomInt(1, 7),
    };
  }
}
