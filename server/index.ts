import fs from 'fs';
import http from 'http';
import express from 'express';
import { Server as ServerIO } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';
import { GameManager } from './src/game-manager';

const app: express.Application = express();

const server = http.createServer(app);

const io = new ServerIO(server, {
  path: '/ws',
});

app.get('/api', (req, res) => {
  res.send('api');
});

const readDB = () => {
  try {
    const db = fs.readFileSync('db.json', 'utf8');
    return db;
  } catch (error) {
    return '{}';
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
          client.emit('session.recovery.response', game.toPlain());
        }
      }
    },
  );

  client.on('game.create', ({ countPlayers }: { countPlayers: number }) => {
    const uuid = uuidv4();
    gameManager.createGame(uuid, countPlayers);
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
        io.emit('game.joined', game.toPlain());

        return gameManager.serialize();
      }

      console.log('Game not found');
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

server.listen(8080, () => {
  console.log('App is listening on port 8080!');
});
