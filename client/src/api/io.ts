import { io } from 'socket.io-client';
import { IGame, CellsPriceData } from 'shared';

import { uuidv4 } from '../lib/uuid';
import { ls } from '../lib/local-storage';
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
  const clientId = ls.get('clientId');

  if (gameId && clientId) {
    events.emit('session.recovery.request', { gameId, clientId });
  }

  if (!clientId) {
    const uuid = uuidv4();
    ls.set('clientId', uuid);
  }
});

events.on('session.recovery.response', (gameRaw: string) => {
  const game: IGame = JSON.parse(gameRaw);

  // playerStore.update(game);
  gameStore.update(game);
});

events.on('game.created', ({ id }: { id: string }) => {
  gameSettingStore.setGameId(id);
  gameSettingStore.setGameCreated(true);
});

// events.on('game.joined.self', () => {
//   playerStore.setJoined(true);
// });

events.on('game.joined', (game: IGame) => {
  // playerStore.update(game);
  gameStore.update(game);
});

events.on('game.update', (game: IGame) => {
  // const game: IGame = JSON.parse(gameRaw);

  // playerStore.update(game);
  gameStore.update(game);
});

events.on('game.board.price', (cellsPriceData: CellsPriceData) => {
  console.log(cellsPriceData);
});
