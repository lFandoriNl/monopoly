import { Server as SocketServer, Socket } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from 'socket-controllers';
import { IGame } from 'shared';
import { v4 as uuidv4 } from 'uuid';

import { GameManager } from '../game-manager';
import { Game } from '../domains/game';
import { cellsPriceData } from '../common/cells-data';

@SocketController()
export class GameController {
  constructor(private gameManager: GameManager) {}

  @OnMessage('game.create')
  create(
    @MessageBody()
    { countPlayers }: Partial<IGame>,
    @SocketIO() io: SocketServer,
    @ConnectedSocket() client: Socket,
  ) {
    const uuid = uuidv4();

    this.gameManager.createGame(uuid, new Game({ countPlayers }));
    client.emit('game.created', { id: uuid });
  }

  @OnMessage('game.join')
  join(
    @MessageBody()
    {
      gameId,
      playerId,
      namePlayer,
    }: {
      gameId: string;
      playerId: string;
      namePlayer: string;
    },
    @ConnectedSocket() client: Socket,
    @SocketIO() io: SocketServer,
  ) {
    const game = this.gameManager.getGame(gameId);

    if (game?.hasFreeSlot()) {
      game.addPlayer({ id: playerId, name: namePlayer });
      this.gameManager.updateGame(gameId, game);

      client.join(gameId);

      client.emit('game.joined.self');
      client.emit('game.board.price', cellsPriceData);
      io.to(gameId).emit('game.joined', game);
    }
  }
}
