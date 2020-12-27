import { io, Socket } from 'socket.io-client';

const isDev = process.env.NODE_ENV === 'development';

// socket.on('connect', () => {
//   console.log('connected');
// });

// socket.on('disconnect', () => {
//   console.log('disconnected');
// });

let socket = undefined;

export const initializeSocket = () => {
  socket = io(isDev ? 'http://localhost:8080' : '/', {
    path: '/ws',
    transports: ['websocket'],
  });
};

export const events: Socket | undefined = socket;
