import { CubesValueType } from '../board/cube';
import { CellPosition } from '../board/cell';
import { IBoard } from '../board/board';

export type PlayerActions = 'rollDice' | 'buyCompany' | 'payRent';

export interface IPlayer {
  id: string;
  joined: boolean;
  name: string;
  color: string;
  balance: number;
  moveCells: CellPosition[];

  availableActions: Array<PlayerActions>;
}

export interface IGame {
  currentPlayerId: string;
  countPlayers: number;
  players: IPlayer[];
  currentDiceValue: CubesValueType;
  board: IBoard;
}
