import { Server as SocketServer } from 'socket.io';
import {
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from 'socket-controllers';

import { GameManager } from '../game-manager';

@SocketController()
export class GameEventsController {
  constructor(private gameManager: GameManager) {}

  @OnMessage('game.events.roll-dice')
  rollDice(
    @MessageBody() { gameId }: { gameId: string },
    @SocketIO() io: SocketServer,
  ) {
    const game = this.gameManager.getGame(gameId);

    if (game) {
      game.rollDice();
      this.gameManager.updateGame(gameId, game);

      io.to(gameId).emit('game.update', JSON.stringify(game));
    }
  }
}
