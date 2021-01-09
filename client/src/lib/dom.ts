import { CellPosition } from 'shared';
import { PointType } from '../game/board/chip';

export function getPositionRelativeOfParent(
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
    // @ts-ignore
    childTemp = childTemp?.offsetParent;
  }
  return { x, y };
}

function getCellElementByPathAndOrder(
  container: HTMLDivElement,
  { path, order }: CellPosition,
) {
  return container.querySelector<HTMLDivElement>(`.${path}-${order}`);
}

export function getPointsFromCells(
  boardElement: HTMLDivElement,
  cells: CellPosition[],
): PointType[] {
  const prevCellCorrect = cells[cells.length - 1];
  return cells.map((cell) => {
    const cellElement = getCellElementByPathAndOrder(boardElement, cell);

    const prevCellElement = getCellElementByPathAndOrder(
      boardElement,
      prevCellCorrect,
    );

    const positionRelative = getPositionRelativeOfParent(
      boardElement,
      cellElement!,
    );

    const cellRect = cellElement!.getBoundingClientRect();
    const prevCellRect = prevCellElement!.getBoundingClientRect();

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
