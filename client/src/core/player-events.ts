import { events } from '../api/io';
import { playersStore } from '../common/store/players-store';

export class PlayerEvents {
  roleDice(): void {
    events.emit('game.cubes', {
      playerId: playersStore.currentPlayerId,
    });
  }
}

export const playerEvents = new PlayerEvents();
