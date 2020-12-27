import { observer } from 'mobx-react';

import { playersStore } from '../common/store/players-store';
import { gameSettingStore } from '../create-game/game-setting-store';

import { Cell } from './board/cell';
import { board } from './board-settings';
import { Board } from './board-styled';
import { InputNameModal } from './input-name-modal';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Game = observer(() => {
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const id = searchParams.get('id');

    if (id) {
      gameSettingStore.setGameId(id);
    }
  }, [search]);

  return (
    <div>
      <div>
        {playersStore.players.map((player) => (
          <div>{player.name}</div>
        ))}
      </div>

      <Board>
        {board.map((item) => (
          <Cell {...item} />
        ))}
      </Board>

      {playersStore.joined === false && <InputNameModal />}
    </div>
  );
});
