import { useState, useRef } from 'react';
import { observer } from 'mobx-react';

import { ActionsPopup } from './actions-popup';
import { Cell } from './cell';
import { Chip, PointType } from './chip';

import { BoardWrapper } from './board-styled';

import { boardCells } from './board-cells';

import { getPointsFromCells } from '../../lib/dom';
import { playerStore } from '../../core/player-store';

export const Board = observer(() => {
  const boardRef = useRef<HTMLDivElement>(null);

  return (
    <BoardWrapper>
      <div className="mainSquare" ref={boardRef}>
        {playerStore.players?.map((player) => {
          const boardElement = boardRef.current;

          if (boardElement) {
            const newPositions = getPointsFromCells(
              boardElement,
              player.moveCells,
            );

            return <Chip color={player.color} points={newPositions} />;
          }
        })}

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
