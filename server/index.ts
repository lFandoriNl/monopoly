import fs from 'fs';
import http from 'http';
import { emit } from 'process';
import { IGame } from 'shared-types';
import { Server as ServerIO } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
import { Game } from './src/game';
import { GameManager } from './src/game-manager';

const server = http.createServer();

const io = new ServerIO(server, {
  path: '/ws',
});

process.on('uncaughtException', (error) => {
  console.log(error);
  console.error('uncaughtException');
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received');
});

server.listen(8080, () => {
  console.log('App is listening on port 8080!');
});

const readDB = () => {
  try {
    const db = fs.readFileSync('db.json', 'utf8');
    return db;
  } catch (error) {
    return '{"gameMap":{}}';
  }
};

const db = readDB();

const gameManager = new GameManager(db, (raw: string) => {
  fs.writeFile('db.json', raw, (error) => {
    if (error) {
      console.error(error);
    }
  });
});

io.on('connection', (client) => {
  console.log('a user connected');

  client.on(
    'session.recovery.request',
    (gameId: string | null, clientId: string | null) => {
      if (clientId && gameId) {
        const game = gameManager.getGame(gameId);

        if (game.hasPlayer(clientId)) {
          client.emit('session.recovery.response', JSON.stringify(game));
        }
      }
    },
  );

  client.on('game.create', ({ countPlayers }: Partial<IGame>) => {
    const uuid = uuidv4();
    gameManager.createGame(uuid, new Game({ countPlayers }));
    gameManager.serialize();

    io.emit('game.created', { id: uuid });
  });

  client.on(
    'game.join',
    ({
      gameId,
      playerId,
      namePlayer,
    }: {
      gameId: string;
      playerId: string;
      namePlayer: string;
    }) => {
      const game = gameManager.getGame(gameId);

      if (game?.hasFreeSlot()) {
        game.addPlayer({ id: playerId, name: namePlayer });

        client.join(gameId);

        client.emit('game.joined.self');
        io.to(gameId).emit('game.joined', JSON.stringify(game));

        return gameManager.serialize();
      }

      console.log('Game not found');
    },
  );

  client.on(
    'game.events.roll-dice',
    ({ gameId, playerId }: { gameId: string; playerId: string }) => {
      const game = gameManager.getGame(gameId);

      game.rollDice();
      gameManager.serialize();

      io.to(gameId).emit('game.update', JSON.stringify(game));
    },
  );

  client.on('disconnect', () => {
    console.log('user disconnected');
  });

  client.on('connect_error', () => {
    console.log('connect_error');
    setTimeout(() => {
      client.connect();
    }, 1000);
  });
});
