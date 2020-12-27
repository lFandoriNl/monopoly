import http from 'http';
import express from 'express';
import { Server as ServerIO } from 'socket.io';

const app: express.Application = express();

const server = http.createServer(app);

const io = new ServerIO(server, {
  path: '/ws',
});

app.get('/api', (req, res) => {
  res.send('api');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('game.create', (msg: { countPlayers: number }) => {
    console.log(msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(8080, () => {
  console.log('App is listening on port 8080!');
});
