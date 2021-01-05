import { observer } from 'mobx-react';

import styled from 'styled-components/macro';

import { playerStore } from '../../core/player-store';

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
      {playerStore.players?.map((player) => (
        <PlayerCard>
          <div>{player.name}</div>
          <div>{15000}$</div>
        </PlayerCard>
      ))}
    </Wrapper>
  );
});
