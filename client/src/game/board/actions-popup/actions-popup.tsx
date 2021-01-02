import { observer } from 'mobx-react';
import styled from 'styled-components/macro';

import { gameStore } from '../../../core/game-store';
import { playerEvents } from '../../../core/player-events';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #7cf17a;
  border: 2px solid #097d0c;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #62c061;
  }
`;

export const ActionsPopup = observer(() => {
  return (
    <Wrapper>
      <div style={{ marginRight: '1rem' }}>
        {gameStore.currentDiceValue.firstCube}{' '}
        {gameStore.currentDiceValue.secondCube}
      </div>

      <ActionButton onClick={playerEvents.roleDice}>
        Бросить кубики
      </ActionButton>
    </Wrapper>
  );
});
