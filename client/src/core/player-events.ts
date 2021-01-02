import { events } from '../api/io';
import { playerStore } from './player-store';
import { gameSettingStore } from '../create-game/game-setting-store';

export class PlayerEvents {
  roleDice() {
    events.emit('game.events.roll-dice', {
      gameId: gameSettingStore.gameId,
      playerId: playerStore.currentPlayerId,
    });
  }
}

export const playerEvents = new PlayerEvents();
