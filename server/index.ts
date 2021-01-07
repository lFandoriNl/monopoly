import http from 'http';
import 'reflect-metadata';
import { useContainer, useSocketServer } from 'socket-controllers';
import { Server as ServerIO } from 'socket.io';
import { Container } from 'typedi';

useContainer(Container);

const server = http.createServer();

const io = new ServerIO(server, {
  path: '/ws',
});

useSocketServer(io, {
  controllers: [__dirname + '/src/controllers/*.ts'],
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
