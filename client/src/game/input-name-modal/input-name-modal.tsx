import { observer } from 'mobx-react';

import styled from 'styled-components/macro';
import { playerStore } from '../../core/player-store';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000b5;
`;

const Modal = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

const Title = styled.h2`
  margin-top: 0;
  color: #000;
`;

const Input = styled.input`
  display: block;
`;

const Button = styled.button`
  padding: 6px 20px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #000;
    background-color: #5fe0ff;
    cursor: pointer;
  }
`;

export const InputNameModal = observer(() => {
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    playerStore.setCurrentPlayerName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    playerStore.joinToGame();
  };

  return (
    <Wrapper>
      <Modal>
        <form onSubmit={handleSubmit}>
          <Title>Введите свое имя</Title>

          <Input
            value={playerStore.currentPlayerName}
            onChange={handleChangeName}
          />
          <br />

          <Button type="submit" disabled={!playerStore.currentPlayerName}>
            Готово
          </Button>
        </form>
      </Modal>
    </Wrapper>
  );
});
