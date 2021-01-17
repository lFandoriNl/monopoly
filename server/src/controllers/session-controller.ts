import { Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  OnConnect,
  OnDisconnect,
  OnMessage,
  SocketController,
} from 'socket-controllers';

import { GameService } from '../services/game-service';
import { cellsPriceData } from '../common/cells-data';

@SocketController()
export class SessionController {
  constructor(private gameService: GameService) {}

  @OnConnect()
  connection() {
    console.log('a user connected');
  }

  @OnDisconnect()
  disconnect() {
    console.log('user disconnected');
  }

  @OnMessage('session.recovery.request')
  recoveryRequest(
    @MessageBody()
    { gameId, clientId }: { gameId: string | null; clientId: string | null },
    @ConnectedSocket() client: Socket,
  ) {
    if (clientId && gameId) {
      const game = this.gameService.getGame(gameId);

      if (game && game.hasPlayer(clientId)) {
        client.join(gameId);
        client.emit('session.recovery.response', JSON.stringify(game));

        client.emit('game.board.price', cellsPriceData);
      }

      if (!game) {
        client.emit('session.recovery.error', 'invalid game id');
      }
    }
  }
}
