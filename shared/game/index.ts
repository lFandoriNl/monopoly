import { CubesValueType } from '../board/cube';
import { CellType } from '../board/cell';

export interface IPlayer {
  id: string;
  name: string;
  color: string;
  moveCells: CellType[];
}

export interface IGame {
  currentPlayerId: string;
  countPlayers: number;
  players: IPlayer[];
  currentDiceValue: CubesValueType;
}
