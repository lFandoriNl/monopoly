import { useState, useRef, useMemo } from 'react';

import { Cell } from './cell';
import { BoardWrapper } from './board-styled';

import { boardCells } from './board-cells';
import { Chip } from './chip';

import { getPositionRelativeToParent } from '../../lib/dom';

// const sequencePaths = ['top', 'right', 'bottom', 'left'];
const sequencePaths = {
  top: 'right',
  right: 'bottom',
  bottom: 'left',
  left: 'top',
} as const;

function calcNumberMoveCells(index: number, prevIndex: number) {
  return Math.abs(index - prevIndex);
}

export const Board = () => {
  const [position, setPosition] = useState({
    path: 'top',
    index: '0',
  });
  const [prevPosition, setPrevPosition] = useState({
    path: 'top',
    index: '0',
  });

  const [positionChip, setPositionChip] = useState({ x: 0, y: 0, duration: 0 });

  const boardRef = useRef<HTMLDivElement>(null);

  const handleStartMove = (event: React.FormEvent) => {
    event.preventDefault();

    const boardElement = boardRef.current;

    if (boardElement) {
      const cells = boardElement.querySelectorAll<HTMLDivElement>(
        `.cells-${position.path} .cell`,
      );
      const target = cells[Number(position.index)];

      if (target) {
        const { x, y } = getPositionRelativeToParent(boardElement, target);
        const rect = target.getBoundingClientRect();

        setPrevPosition(position);

        const numberMoveCells = calcNumberMoveCells(
          Number(position.index),
          Number(prevPosition.index),
        );

        const msForOneCell = 200;
        const duration = numberMoveCells * msForOneCell;

        setPositionChip({
          x: x + rect.width / 2 - 12,
          y: y + rect.height / 2 - 12,
          duration: duration > 1000 ? duration : 1000,
        });
      }
    }
  };

  const points = useMemo(
    () => [
      { x: 50, y: 50, duration: 1000 },
      { x: 50, y: 500, duration: 1500 },
      { x: 500, y: 500, duration: 1500 },
    ],
    [],
  );

  return (
    <BoardWrapper>
      <form onSubmit={handleStartMove}>
        <button type="submit">Start</button>
        <input
          value={position.path}
          onChange={(event) =>
            setPosition((prev) => ({ ...prev, path: event.target.value }))
          }
        />
        <input
          value={position.index}
          onChange={(event) =>
            setPosition((prev) => ({
              ...prev,
              index: event.target.value,
            }))
          }
        />
      </form>
      <div className="responsive">
        <div className="mainSquare" ref={boardRef}>
          {/* {...positionChip} */}
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
            <div className="square9"></div>
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
