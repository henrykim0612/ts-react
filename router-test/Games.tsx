import * as React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => (
  <BrowserRouter>
    <div>
      <Link to="/page/page1">Page 1</Link>
      &nbsp;
      <Link to="/page/page2">Page 2</Link>
      &nbsp;
      <Link to="/page/page3">Page 3</Link>
      &nbsp;
      <Link to="/page/page4">Page 4</Link>
    </div>
    <div>
      <Switch>
        <Route exact path="/" component={GameMatcher} />
        <Route path="/page/:name" component={GameMatcher} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Games;
