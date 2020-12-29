import { CellType } from 'shared-types';
import { PointType } from '../game/board/chip';

export function getPositionRelativeToParent(
  parent: HTMLElement,
  child: HTMLElement,
) {
  let childTemp: HTMLElement | null | undefined = child;
  let x = 0;
  let y = 0;

  while (parent !== childTemp) {
    if (childTemp) {
      x += childTemp.offsetLeft;
      y += childTemp.offsetTop;
    }

    childTemp = childTemp?.parentElement;
  }

  return { x, y };
}

function calcNumberMoveCells(index: number, prevIndex: number) {
  return Math.abs(index - prevIndex);
}

function getCellElementByPathAndIndex(
  container: HTMLDivElement,
  cell: CellType,
) {
  const cellsElements = container.querySelectorAll<HTMLDivElement>(
    `.cells-${cell.path} .cell`,
  );
  return cellsElements[cell.index];
}

export function getPointsFromCells(
  boardElement: HTMLDivElement,
  cells: CellType[],
  prevCell: CellType,
): PointType[] {
  return cells.map((cell, idx, array) => {
    const prevCellCorrect = idx === 0 ? prevCell : array[idx - 1];

    const cellElement = getCellElementByPathAndIndex(boardElement, cell);

    const prevCellElement = getCellElementByPathAndIndex(
      boardElement,
      prevCellCorrect,
    );

    const positionRelative = getPositionRelativeToParent(
      boardElement,
      cellElement,
    );

    const cellRect = cellElement.getBoundingClientRect();
    const prevCellRect = prevCellElement.getBoundingClientRect();

    const distanceBetweenCells = Math.sqrt(
      (cellRect.x - prevCellRect.x) ** 2 + (cellRect.y - prevCellRect.y) ** 2,
    );

    const duration = distanceBetweenCells;

    return {
      x: positionRelative.x + cellRect.width / 2 - 12,
      y: positionRelative.y + cellRect.height / 2 - 12,
      duration: duration > 1000 ? duration : 1000,
    };
  });
}
