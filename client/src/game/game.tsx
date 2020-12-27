import { Cell } from './board/cell';
import { board } from './board-settings';
import { Board } from './board-styled';
// To Do : add game table
export function Game() {
  return (
    <Board>
      {board.map((item) => (
        <Cell {...item} key={item.id} />
      ))}
    </Board>
  );
}
