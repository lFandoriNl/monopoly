import { observer } from 'mobx-react';

import styled from 'styled-components/macro';

import { gameStore } from '../../core/game-store';

const Wrapper = styled.div`
  width: 180px;
  height: 695px;
  margin: 22px 0 22px 22px;
`;

const PlayerCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  color: #fff;
  background-color: #161b1b;
`;

export const Players = observer(() => {
  return (
    <Wrapper>
      {gameStore.players?.map((player) => (
        <PlayerCard>
          <div>{player.name}</div>
          <div>{player.balance}$</div>
        </PlayerCard>
      ))}
    </Wrapper>
  );
});
