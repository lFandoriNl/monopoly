import { getRandomInt } from './lib/get-random-value';

type CubesValueType = {
  firstCube: number;
  secondCube: number;
};

export class Cubes {
  static generateCubes(): CubesValueType {
    return {
      firstCube: getRandomInt(1, 7),
      secondCube: getRandomInt(1, 7),
    };
  }
}
