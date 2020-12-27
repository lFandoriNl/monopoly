import { Cell } from './cell';
import { BoardWrapper } from './board-styled';

import { boardCells } from './board-cells';

export const Board = () => {
  return (
    <BoardWrapper>
      <div className="responsive">
        <div className="mainSquare">
          <div className="row top">
            {boardCells
              .filter((cell) => cell.position === 'top')
              .map((cell) => (
                <Cell key={cell.id} {...cell} />
              ))}
          </div>

          <div className="row center">
            <div className="square2">
              {boardCells
                .filter((cell) => cell.position === 'left')
                .map((cell) => (
                  <Cell key={cell.id} {...cell} />
                ))}
            </div>
            <div className="square9"></div>
            <div className="square2">
              {boardCells
                .filter((cell) => cell.position === 'right')
                .map((cell) => (
                  <Cell key={cell.id} {...cell} />
                ))}
            </div>
          </div>

          <div className="row top">
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
