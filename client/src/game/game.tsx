import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components/macro';

import { observer } from 'mobx-react';
import { playerStore } from '../core/player-store';
import { gameSettingStore } from '../create-game/game-setting-store';

import { Players } from './players';
import { Board } from './board';
import { InputNameModal } from './input-name-modal';
import { getSearchParam } from '../lib/search-param';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Game = observer(() => {
  const { search } = useLocation();

  useEffect(() => {
    const gameId = getSearchParam('id');

    if (gameId) {
      gameSettingStore.setGameId(gameId);
    }
  }, [search]);

  return (
    <Wrapper>
      <Players />

      <Board />

      {playerStore.joined === false && <InputNameModal />}
    </Wrapper>
  );
});
