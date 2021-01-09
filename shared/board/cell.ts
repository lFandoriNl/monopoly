import { IPlayer } from '../game';

export type Position = 'top' | 'right' | 'bottom' | 'left';

export type CellPosition = {
  path: Position;
  order: number;
};

export type CellKind =
  | 'start'
  | 'prison'
  | 'jackpot'
  | 'vacation'
  | 'company'
  | 'riddle'
  | 'tax';

type CellDataSquare = {
  next: number;
  square: boolean;
  path: 'top' | 'bottom';
  type: 'start' | 'prison' | 'jackpot' | 'vacation';
};

type CellDataCompany = {
  next: number;
  square: boolean;
  path: CellPosition['path'];
  type: 'company';
  ownerId?: IPlayer['id'];
  ownerColor?: string;
};

type CellDataRandom = {
  next: number;
  square: boolean;
  path: CellPosition['path'];
  type: 'riddle' | 'tax';
};

export type CellsData = {
  [key: number]: CellDataSquare | CellDataCompany | CellDataRandom;
};
