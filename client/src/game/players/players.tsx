import { playersStore } from '../../common/store/players-store';

export const Players = () => {
  return (
    <div>
      {playersStore.players.map((player) => (
        <div>{player.name}</div>
      ))}
    </div>
  );
};
