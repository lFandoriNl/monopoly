import { CellPosition } from 'shared';
import { cellsData } from '../common/cells-data';

export function calcCellsPath(
  currentCells: CellPosition[],
  numberSteps: number,
): CellPosition[] {
  const currentCell = currentCells[currentCells.length - 1];

  const resultCells: CellPosition[] = [{ ...currentCell }];

  let { order } = currentCell;

  for (let i = 0; i <= numberSteps; i++) {
    if (!cellsData[order]) {
      order = 0;
    }

    if (cellsData[order].square && i !== 0) {
      resultCells.push({
        path: cellsData[order].path,
        order,
      });
    } else if (i === numberSteps) {
      resultCells.push({ path: cellsData[order].path, order });
    }

    order++;
  }

  return resultCells;
}
