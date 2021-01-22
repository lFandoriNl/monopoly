import { events } from '../api/io';
import { ls } from '../lib/local-storage';
import { getSearchParam } from '../lib/search-param';

export class PlayerEvents {
  createGame(countPlayers: number) {
    if (countPlayers) {
      events.emit('game.create', { countPlayers });
    }
  }

  joinToGame(playerName: string) {
    const playerId = ls.get('clientId');
    const gameId = getSearchParam('id');

    if (typeof playerId === 'string') {
      events.emit('game.join', {
        gameId,
        playerId,
        playerName,
      });
    }
  }

  roleDice() {
    const gameId = getSearchParam('id');

    events.emit('game.events.roll-dice', { gameId });
  }

  buyCompany() {
    const gameId = getSearchParam('id');

    events.emit('game.events.buy-company', { gameId });
  }

  payRent() {
    const gameId = getSearchParam('id');

    events.emit('game.events.pay-rent', { gameId });
  }
}

export const playerEvents = new PlayerEvents();
