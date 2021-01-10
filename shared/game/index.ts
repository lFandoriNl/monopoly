import { CubesValueType } from '../board/cube';
import { CellPosition } from '../board/cell';
import { IBoard } from '../board/board';

export interface IPlayer {
  id: string;
  joined: boolean;
  name: string;
  color: string;
  balance: number;
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
  board?: IBoard;
}

export interface IGameSettings {
  gameId: string;
  gameCreated: boolean;
  chipAnimatedDisabled: boolean;
}
