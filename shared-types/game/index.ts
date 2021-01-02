import { PlayerType } from '../player';
import { CubesValueType } from '../board/cuber';

export interface IGame {
  currentPlayerId: string;
  currentDiceValue: CubesValueType;
  countPlayers: number;
  players: PlayerType[];
}

export interface IPlayer {
  id: string;
  name: string;
}
