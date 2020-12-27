import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { CreateGame } from './create-game';
import { GameTable } from './game-table';

import './io';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={CreateGame} />
          <Route exact path="/game/:id" component={GameTable} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
