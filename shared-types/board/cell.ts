export type Position = 'top' | 'right' | 'bottom' | 'left';

export type CellType = {
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
