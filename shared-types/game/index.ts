import { PlayerType } from '../player';
import { CubesValueType } from '../board/cube';
import { CellType } from '../board/cell';

export interface IGame {
  currentPlayerId: string;
  countPlayers: number;
  players: PlayerType[];
  currentDiceValue: CubesValueType;
  moveCells: CellType[];
}

export interface IPlayer {
  id: string;
  name: string;
}
