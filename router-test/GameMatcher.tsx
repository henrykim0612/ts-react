import * as React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const GameMatcher = () => {
  const match = useRouteMatch<{ name: string }>();
  const location = useLocation();
  const history = useHistory();
  if (!match) {
    return (
      <div>
        일치하는 게임이 없습니다.
      </div>
    );
  }
  const urlSearchParams = new URLSearchParams(location.search.slice(1)); // slice 를 하는 이유는 물음표(?) 제거
  console.log(urlSearchParams.get('page'));
  if (match.params.name === 'page1') {
    return <Page1 />;
  } if (match.params.name === 'page2') {
    return <Page2 />;
  } if (match.params.name === 'page3') {
    return <Page3 />;
  }
  return (
    <div>
      일치하는 게임이 없습니다.
    </div>
  );
};

export default GameMatcher;
