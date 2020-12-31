import { events } from '../api/io';
import { playersStore } from '../common/store/players-store';
import { gameSettingStore } from '../create-game/game-setting-store';

export class PlayerEvents {
  roleDice() {
    events.emit('game.events.roll-dice', {
      gameId: gameSettingStore.gameId,
      playerId: playersStore.currentPlayerId,
    });
  }
}

export const playerEvents = new PlayerEvents();
