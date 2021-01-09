import { CubesValueType } from '../board/cube';
import { CellPosition } from '../board/cell';

export interface IPlayer {
  id: string;
  name: string;
  color: string;
  moveCells: CellPosition[];
  isReviewBuyCompany: boolean;
  buyPrice?: number;
}

export interface IGame {
  currentPlayerId: string;
  countPlayers: number;
  players: IPlayer[];
  currentDiceValue: CubesValueType;
}
