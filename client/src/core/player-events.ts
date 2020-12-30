import { events } from '../api/io';
import { playersStore } from '../common/store/players-store';

export class PlayerEvents {
  roleDice() {
    events.emit('game.events.roll-dice', {
      playerId: playersStore.currentPlayerId,
    });
  }
}

export const playerEvents = new PlayerEvents();
