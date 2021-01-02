import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import styled from 'styled-components/macro';

import { CreateGame } from './create-game';
import { Game } from './game';

const Wrapper = styled.div`
  height: 100%;
  background-color: #282c30;
`;

export function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Route exact path="/" component={CreateGame} />
          <Route path="/game" component={Game} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}
