import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, ThunkDispatch } from './actions/user';
import { UserState } from './reducers/user';
import { RootState } from './reducers';

interface StateToProps {
  user: UserState,
}
interface DispatchToProps {
  dispatchSignIn: ({ id, password }: { id: string, password: string }) => void,
  dispatchSignOut: () => void,
}

class App extends Component<StateToProps & DispatchToProps> {
  onClick = () => {
    this.props.dispatchSignIn({
      id: 'henry',
      password: 'henry',
    });
  };

  onSignOut = () => {
    this.props.dispatchSignOut();
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {
          // eslint-disable-next-line no-nested-ternary
          user.isLoggingIn
            ? <div>Loading...</div>
            : user.data
              ? <div>{user.data.nickname}</div>
              : 'Please sign in.'
        }
        {
          !user.data
            ? <button type="button" onClick={this.onClick}>Sign in</button>
            : <button type="button" onClick={this.onSignOut}>Sign out</button>
        }
      </div>
    );
  }
}

// Class 로 리덕스를 쓰려면 이렇게..
const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  dispatchSignIn: (data: { id: string, password: string }) => dispatch(login(data)),
  dispatchSignOut: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
