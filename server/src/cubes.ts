import { getRandomInt } from './get-random-value';

export default class Cubes {
  static getCubes(): object {
    return {
      firstCube: getRandomInt(1, 6),
      secondCube: getRandomInt(1, 6),
    };
  }
}
