import { CellType } from 'shared';
import { calcCellsPath } from './calc-cells-path';

describe('calcCellsPath', () => {
  it('calc top > right', () => {
    const currentCells: CellType[] = [{ path: 'top', order: 0 }];

    const numberSteps = 12;

    const result: CellType[] = [
      { path: 'top', order: 0 },
      { path: 'top', order: 10 },
      { path: 'right', order: 12 },
    ];

    expect(calcCellsPath(currentCells, numberSteps)).toEqual(result);
  });

  it('calc right > right', () => {
    const currentCells: CellType[] = [
      { path: 'top', order: 0 },
      { path: 'top', order: 10 },
      { path: 'right', order: 12 },
    ];

    const numberSteps = 5;

    const result: CellType[] = [
      { path: 'right', order: 12 },
      { path: 'right', order: 17 },
    ];

    expect(calcCellsPath(currentCells, numberSteps)).toEqual(result);
  });

  it('calc right > start bottom', () => {
    const currentCells: CellType[] = [
      { path: 'right', order: 12 },
      { path: 'right', order: 17 },
    ];

    const numberSteps = 3;

    const result: CellType[] = [
      { path: 'right', order: 17 },
      { path: 'bottom', order: 20 },
    ];

    expect(calcCellsPath(currentCells, numberSteps)).toEqual(result);
  });

  it('calc right > bottom', () => {
    const currentCells: CellType[] = [
      { path: 'right', order: 15 },
      { path: 'right', order: 19 },
    ];

    const numberSteps = 7;

    const result: CellType[] = [
      { path: 'right', order: 19 },
      { path: 'bottom', order: 20 },
      { path: 'bottom', order: 26 },
    ];

    expect(calcCellsPath(currentCells, numberSteps)).toEqual(result);
  });

  it('calc bottom > end bottom', () => {
    const currentCells: CellType[] = [
      { path: 'right', order: 15 },
      { path: 'bottom', order: 27 },
    ];

    const numberSteps = 3;

    const result: CellType[] = [
      { path: 'bottom', order: 27 },
      { path: 'bottom', order: 30 },
    ];

    expect(calcCellsPath(currentCells, numberSteps)).toEqual(result);
  });

  it('calc end bottom > start top', () => {
    const currentCells: CellType[] = [
      { path: 'bottom', order: 27 },
      { path: 'bottom', order: 30 },
    ];

    const numberSteps = 10;

    const result: CellType[] = [
      { path: 'bottom', order: 30 },
      { path: 'top', order: 0 },
    ];

    expect(calcCellsPath(currentCells, numberSteps)).toEqual(result);
  });
});
