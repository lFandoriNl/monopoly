import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styled from 'styled-components/macro';

import { observer } from 'mobx-react';
import { gameSettingStore } from '../create-game/game-setting-store';

import { Players } from './players';
import { Board } from './board';
import { InputNameModal } from './input-name-modal';
import { getSearchParam } from '../lib/search-param';
import { gameStore } from '../core/game-store';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
`;

export const Game = observer(() => {
  const [scale, setScale] = useState(1);
  const gameRef = useRef<HTMLDivElement>(null);

  const { search } = useLocation();

  useEffect(() => {
    const gameId = getSearchParam('id');

    if (gameId) {
      gameSettingStore.setGameId(gameId);
    }
  }, [search]);

  useEffect(() => {
    const handleResize = () => {
      if (gameRef.current) {
        setScale(
          Math.min(
            window.innerWidth / gameRef.current.clientWidth,
            window.innerHeight / gameRef.current.clientHeight,
          ),
        );
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper style={{ transform: `scale(${scale})` }} ref={gameRef}>
      <Players />

      <Board />

      {gameStore.joined === false && <InputNameModal />}
    </Wrapper>
  );
});
