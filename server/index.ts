import fs from 'fs';
import http from 'http';
import express from 'express';
import { Server as ServerIO } from 'socket.io';
import { v4 as uuid } from 'uuid';
import { GameManager } from './src/game-manager';

const app: express.Application = express();

const server = http.createServer(app);

const io = new ServerIO(server, {
  path: '/ws',
});

app.get('/api', (req, res) => {
  res.send('api');
});

const db = fs.readFileSync('db.json', 'utf8');
const gameManager = new GameManager(db || '{}', (raw: string) => {
  fs.writeFile('db.json', raw, (error) => {
    if (error) {
      console.error(error);
    }
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('game.create', ({ countPlayers }: { countPlayers: number }) => {
    const id = uuid();
    gameManager.createGame(id, countPlayers);
    gameManager.serialize();

    io.emit('game.created', { id });
  });

  socket.on('game.join', ({ id, name }: { id: string; name: string }) => {
    const game = gameManager.getGame(id);

    if (game?.hasFreeSlot()) {
      game.addPlayer({ name });

      socket.join(id);

      socket.emit('game.joined.self', { name });
      io.emit('game.joined', { name });

      return gameManager.serialize();
    }

    console.log('Game not found');
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(8080, () => {
  console.log('App is listening on port 8080!');
});
