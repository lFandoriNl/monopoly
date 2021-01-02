import { CellType } from 'shared-types';

const cornerList: {
  [key: number]: { square: boolean; path: CellType['path']; next: number };
} = {
  0: {
    square: true,
    path: 'top',
    next: 1,
  },
  1: {
    square: false,
    path: 'top',
    next: 2,
  },
  2: {
    square: false,
    path: 'top',
    next: 3,
  },
  3: {
    square: false,
    path: 'top',
    next: 4,
  },
  4: {
    square: false,
    path: 'top',
    next: 5,
  },
  5: {
    square: false,
    path: 'top',
    next: 6,
  },
  6: {
    square: false,
    path: 'top',
    next: 5,
  },
  7: {
    square: false,
    path: 'top',
    next: 8,
  },
  8: {
    square: false,
    path: 'top',
    next: 9,
  },
  9: {
    square: false,
    path: 'top',
    next: 10,
  },
  10: {
    square: true,
    path: 'top',
    next: 11,
  },
  11: {
    square: false,
    path: 'right',
    next: 12,
  },
  12: {
    square: false,
    path: 'right',
    next: 13,
  },
  13: {
    square: false,
    path: 'right',
    next: 14,
  },
  14: {
    square: false,
    path: 'right',
    next: 15,
  },
  15: {
    square: false,
    path: 'right',
    next: 16,
  },
  16: {
    square: false,
    path: 'right',
    next: 17,
  },
  17: {
    square: false,
    path: 'right',
    next: 18,
  },
  18: {
    square: false,
    path: 'right',
    next: 19,
  },
  19: {
    square: false,
    path: 'right',
    next: 20,
  },
  20: {
    square: true,
    path: 'bottom',
    next: 21,
  },
  21: {
    square: false,
    path: 'bottom',
    next: 22,
  },
  22: {
    square: false,
    path: 'bottom',
    next: 23,
  },
  23: {
    square: false,
    path: 'bottom',
    next: 24,
  },
  24: {
    square: false,
    path: 'bottom',
    next: 25,
  },
  25: {
    square: false,
    path: 'bottom',
    next: 26,
  },
  26: {
    square: false,
    path: 'bottom',
    next: 27,
  },
  27: {
    square: false,
    path: 'bottom',
    next: 28,
  },
  28: {
    square: false,
    path: 'bottom',
    next: 29,
  },
  29: {
    square: false,
    path: 'bottom',
    next: 30,
  },
  30: {
    square: true,
    path: 'bottom',
    next: 31,
  },
  31: {
    square: false,
    path: 'left',
    next: 32,
  },
  32: {
    square: false,
    path: 'left',
    next: 33,
  },
  33: {
    square: false,
    path: 'left',
    next: 34,
  },
  34: {
    square: false,
    path: 'left',
    next: 35,
  },
  35: {
    square: false,
    path: 'left',
    next: 36,
  },
  36: {
    square: false,
    path: 'left',
    next: 37,
  },
  37: {
    square: false,
    path: 'left',
    next: 38,
  },
  38: {
    square: false,
    path: 'left',
    next: 39,
  },
  39: {
    square: false,
    path: 'left',
    next: 0,
  },
};

const sequencePaths = {
  top: 'right',
  right: 'bottom',
  bottom: 'left',
  left: 'top',
} as const;

export function calcCellsPath(
  currentCells: CellType[],
  numberSteps: number,
): CellType[] {
  const currentCell = currentCells[currentCells.length - 1];

  const resultCells: CellType[] = [{ ...currentCell }];

  let { order } = currentCell;

  for (let i = 0; i <= numberSteps; i++) {
    if (!cornerList[order]) {
      order = 0;
    }

    if (cornerList[order].square && i !== 0) {
      resultCells.push({
        path: cornerList[order].path,
        order,
      });
    } else if (i === numberSteps) {
      resultCells.push({ path: cornerList[order].path, order });
    }

    order++;
  }

  return resultCells;
}
