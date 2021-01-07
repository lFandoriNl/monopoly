import { IGame } from 'shared-types';
import { Service } from 'typedi';
import { Game } from './game';
import { GameRepository } from './game-repository';

@Service()
export class GameManager {
  constructor(private gameRepository: GameRepository) {}

  createGame(id: string, game: IGame) {
    this.gameRepository.save(id, new Game(game));
  }

  updateGame(id: string, game: Game) {
    this.gameRepository.save(id, game);
  }

  getGame(id: string) {
    return this.gameRepository.findById(id);
  }

  hasGame(id: string) {
    return Boolean(this.gameRepository.findById(id));
  }

  hasFreeGame(id: string) {
    return this.gameRepository.findById(id)?.hasFreeSlot();
  }
}
