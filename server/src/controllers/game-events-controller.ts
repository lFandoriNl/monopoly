import { Server as SocketServer } from 'socket.io';
import {
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from 'socket-controllers';

import { GameService } from '../services/game-service';

@SocketController()
export class GameEventsController {
  constructor(private gameService: GameService) {}

  @OnMessage('game.events.roll-dice')
  rollDice(
    @MessageBody() { gameId }: { gameId: string },
    @SocketIO() io: SocketServer,
  ) {
    const game = this.gameService.getGame(gameId);

    if (game) {
      game.rollDice();
      this.gameService.updateGame(gameId, game);

      io.to(gameId).emit('game.update', JSON.stringify(game));
    }
  }
}
