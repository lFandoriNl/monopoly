import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components/macro';
import { playerEvents } from '../core/player-events';

import { Radio } from '../ui/radio';

import { gameSettingStore } from './game-setting-store';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

const Title = styled.h1`
  margin-top: 0;
  color: #fff;
`;

const Paragraph = styled.p`
  color: #fff;
`;

const Button = styled.button`
  padding: 6px 20px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #5fe0ff;
    cursor: pointer;
  }
`;

export const CreateGame = observer(() => {
  const [countPlayers, setCountPlayers] = useState<number | undefined>(
    undefined,
  );

  const history = useHistory();

  const handleChangeCountPlayers = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCountPlayers(Number(event.target.value));
  };

  const handleSubmitCreateGame = (event: React.FormEvent) => {
    event.preventDefault();

    if (countPlayers) {
      playerEvents.createGame(countPlayers);
    }
  };

  useEffect(() => {
    if (gameSettingStore.gameCreated) {
      history.push({
        pathname: '/game',
        search: `?id=${gameSettingStore.gameId}`,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, gameSettingStore.gameCreated]);

  return (
    <Wrapper>
      <Form>
        <Title>Создайте свою игру</Title>

        <div>
          <Paragraph>Выберите количество игроков</Paragraph>

          <div>
            {[2, 3, 4].map((value) => (
              <Radio
                key={value}
                name="count-players"
                label={value}
                value={value}
                checked={value === countPlayers}
                onChange={handleChangeCountPlayers}
              />
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={!countPlayers}
          onClick={handleSubmitCreateGame}
        >
          Создать
        </Button>
      </Form>
    </Wrapper>
  );
});
