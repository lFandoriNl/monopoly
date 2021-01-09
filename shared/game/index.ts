import { CubesValueType } from '../board/cube';
import { CellPosition } from '../board/cell';

export interface IPlayer {
  id: string;
  joined: boolean;
  name: string;
  color: string;
  balance: number;
  isMove: boolean;
  moveCells: CellPosition[];
  buyPrice: number;

  showRollDice: boolean;
  showBuyCompany: boolean;
}

export interface IGame {
  currentPlayerId: string;
  countPlayers: number;
  players: IPlayer[];
  currentDiceValue: CubesValueType;
}
