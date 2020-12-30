import { useState, useRef } from 'react';

import { CellType } from 'shared-types';

import { ActionsPopup } from './actions-popup';
import { Cell } from './cell';
import { Chip, PointType } from './chip';

import { BoardWrapper } from './board-styled';

import { boardCells } from './board-cells';

import { getPointsFromCells } from '../../lib/dom';

// const sequencePaths = ['top', 'right', 'bottom', 'left'];
const sequencePaths = {
  top: 'right',
  right: 'bottom',
  bottom: 'left',
  left: 'top',
} as const;

const cells: CellType[] = [
  {
    path: 'top',
    index: 10,
  },
  {
    path: 'right',
    index: 5,
  },
];

export const Board = () => {
  const [points, setPoints] = useState<PointType[]>([]);
  const [prevPosition, setPrevPosition] = useState<CellType>({
    path: 'top',
    index: 0,
  });

  const [positionChip, setPositionChip] = useState({ x: 0, y: 0, duration: 0 });

  const boardRef = useRef<HTMLDivElement>(null);

  const handleStartMove = (event: React.FormEvent) => {
    event.preventDefault();

    const boardElement = boardRef.current;

    if (boardElement) {
      const newPositions = getPointsFromCells(
        boardElement,
        cells,
        prevPosition,
      );

      setPoints(newPositions);
    }
  };

  return (
    <BoardWrapper>
      <form onSubmit={handleStartMove}>
        <button type="submit">Start</button>
      </form>

      <div className="responsive">
        <div className="mainSquare" ref={boardRef}>
          <Chip color="#ff4e4e" points={points} />

          <div className="row top cells-top">
            {boardCells
              .filter((cell) => cell.position === 'top')
              .map((cell) => (
                <Cell key={cell.id} {...cell} />
              ))}
          </div>

          <div className="row center">
            <div className="square2 cells-left">
              {boardCells
                .filter((cell) => cell.position === 'left')
                .map((cell) => (
                  <Cell key={cell.id} {...cell} />
                ))}
            </div>

            <div className="square9" style={{ position: 'relative' }}>
              <ActionsPopup />
            </div>

            <div className="square2 cells-right">
              {boardCells
                .filter((cell) => cell.position === 'right')
                .map((cell) => (
                  <Cell key={cell.id} {...cell} />
                ))}
            </div>
          </div>

          <div className="row top cells-bottom">
            {boardCells
              .filter((cell) => cell.position === 'bottom')
              .map((cell) => (
                <Cell key={cell.id} {...cell} />
              ))}
          </div>
        </div>
      </div>
    </BoardWrapper>
  );
};
