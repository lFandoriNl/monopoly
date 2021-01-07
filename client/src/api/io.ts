import { IGame } from 'shared-types';

import { io } from 'socket.io-client';

import { playerStore } from '../core/player-store';

import { uuidv4 } from '../lib/uuid';
import { getSearchParam } from '../lib/search-param';
import { gameSettingStore } from '../create-game/game-setting-store';
import { gameStore } from '../core/game-store';

const isDev = process.env.NODE_ENV === 'development';

export const events = io(isDev ? 'http://localhost:8080' : '/', {
  path: '/ws',
  transports: ['websocket'],
  upgrade: false,
});

events.on('connect', () => {
  const gameId = getSearchParam('id');
  const clientId = localStorage.getItem('clientId');

  if (clientId) {
    events.emit('session.recovery.request', { gameId, clientId });
  }

  if (!clientId) {
    const uuid = uuidv4();
    localStorage.setItem('clientId', uuid);
  }
});

events.on('session.recovery.response', (gameRaw: string) => {
  const game: IGame = JSON.parse(gameRaw);

  playerStore.update(game);
  gameStore.update(game);
});

events.on('game.created', ({ id }: { id: string }) => {
  console.log('game created on clients');

  gameSettingStore.setGameId(id);
  gameSettingStore.setGameCreated(true);
});

events.on('game.joined.self', () => {
  playerStore.setJoined(true);
});

events.on('game.joined', (gameRaw: string) => {
  const game: IGame = JSON.parse(gameRaw);

  playerStore.update(game);
  gameStore.update(game);
});

events.on('game.update', (gameRaw: string) => {
  const game: IGame = JSON.parse(gameRaw);

  playerStore.update(game);
  gameStore.update(game);
});
