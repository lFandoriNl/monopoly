import { observer } from 'mobx-react';
import { playersStore } from '../common/store/players-store';
import { gameSettingStore } from '../create-game/game-setting-store';
import { Cell } from './board/cell';
import { boardBootstrap } from './board-settings';
import { Board } from './board/board-styled';
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
        <div className="responsive">
          <div className="mainSquare">
            <div className="row top">
              {boardBootstrap
                .filter((e) => e.position === 'top')
                .map((e) => (
                  <Cell {...e} />
                ))}
            </div>

            <div className="row center">
              <div className="square2">
                {boardBootstrap
                  .filter((e) => e.position === 'left')
                  .map((e) => (
                    <Cell {...e} />
                  ))}
              </div>
              <div className="square9"></div>
              <div className="square2">
                {boardBootstrap
                  .filter((e) => e.position === 'right')
                  .map((e) => (
                    <Cell {...e} />
                  ))}
              </div>
            </div>

            <div className="row top">
              {boardBootstrap
                .filter((e) => e.position === 'bottom')
                .map((e) => (
                  <Cell {...e} />
                ))}
            </div>
          </div>
        </div>
      </Board>

      {playersStore.joined === false && <InputNameModal />}
    </div>
  );
});
