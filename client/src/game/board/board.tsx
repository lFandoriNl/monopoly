import { useState, useRef, useEffect } from 'react';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';

import { CellType } from 'shared-types';

import { gameStore } from '../../core/game-store';

import { ActionsPopup } from './actions-popup';
import { Cell } from './cell';
import { Chip, PointType } from './chip';

import { BoardWrapper } from './board-styled';

import { boardCells } from './board-cells';

import { getPointsFromCells } from '../../lib/dom';

export const Board = observer(() => {
  const [points, setPoints] = useState<PointType[]>([]);

  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const disposer = autorun(() => {
      const boardElement = boardRef.current;

      if (boardElement) {
        const newPositions = getPointsFromCells(
          boardElement,
          gameStore.moveCells,
        );

        setPoints(newPositions);
      }
    });

    return disposer;
  }, []);

  return (
    <BoardWrapper>
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
              .reverse()
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
            .reverse()
            .map((cell) => (
              <Cell key={cell.id} {...cell} />
            ))}
        </div>
      </div>
    </BoardWrapper>
  );
});
