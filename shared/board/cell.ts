import { IPlayer } from '../game';
import { RentLevel } from './cells-price';

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

export type CellDataCompany = {
  next: number;
  square: boolean;
  path: CellPosition['path'];
  type: 'company';
  ownerId?: IPlayer['id'];
  ownerColor?: string;
  rentLevel?: RentLevel;
};

type CellDataRandom = {
  next: number;
  square: boolean;
  path: CellPosition['path'];
  type: 'riddle' | 'tax';
};

export type CellData = CellDataSquare | CellDataCompany | CellDataRandom;

export type CellsData = {
  [key: number]: CellData;
};
