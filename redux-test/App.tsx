import * as React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './actions/user';
import { UserState } from './reducers/user';
import { RootState } from './reducers';

const App: FC = () => {
  const { isLoggingIn, data } = useSelector<RootState, UserState>((state) => state.user);
  const dispatch = useDispatch();

  const onClick = () => dispatch(login({
    id: 'henry',
    password: 'henry',
  }));

  const onSignOut = () => dispatch(logout());

  return (
    <div>
      {
        // eslint-disable-next-line no-nested-ternary
        isLoggingIn
          ? <div>Loading...</div>
          : data
            ? <div>{data.nickname}</div>
            : 'Please sign in.'
      }
      {
        !data
          ? <button type="button" onClick={onClick}>Sign in</button>
          : <button type="button" onClick={onSignOut}>Sign out</button>
      }
    </div>
  );
};

export default App;
