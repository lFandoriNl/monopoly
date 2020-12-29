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

export function getPointsFromCells(
  boardElement: HTMLDivElement,
  cells: CellType[],
  prevCell: CellType,
): PointType[] {
  return cells.map((cell, idx, array) => {
    const cellsElements = boardElement.querySelectorAll<HTMLDivElement>(
      `.cells-${cell.path} .cell`,
    );
    const target = cellsElements[cell.index];

    const { x, y } = getPositionRelativeToParent(boardElement, target);
    const rect = target.getBoundingClientRect();

    const prevIndex = idx === 0 ? prevCell.index : array[idx - 1].index;
    const numberMoveCells = calcNumberMoveCells(cell.index, prevIndex);

    const msForOneCell = 200;
    const duration = numberMoveCells * msForOneCell;

    return {
      x: x + rect.width / 2 - 12,
      y: y + rect.height / 2 - 12,
      duration: duration > 1000 ? duration : 1000,
    };
  });
}
