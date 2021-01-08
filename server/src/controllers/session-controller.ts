import { Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  OnConnect,
  OnDisconnect,
  OnMessage,
  SocketController,
} from 'socket-controllers';

import { GameManager } from '../game-manager';
import { cellsPriceData } from '../common/cells-data';

@SocketController()
export class SessionController {
  constructor(private gameManager: GameManager) {}

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
      const game = this.gameManager.getGame(gameId);

      if (game && game.hasPlayer(clientId)) {
        client.join(gameId);
        client.emit('session.recovery.response', JSON.stringify(game));

        client.emit('game.board.price', cellsPriceData);
      }
    }
  }
}
