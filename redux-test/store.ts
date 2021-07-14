import { createStore, MiddlewareAPI, Dispatch, compose, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  console.log('Logging', action);
  next(action);
};
// Action 이 함수로 호출되는 Thunk action 이다.
const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState); // 비동기
  }
  return next(action); // 동기
};
const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
  : composeWithDevTools(
    applyMiddleware(firstMiddleware, thunkMiddleware),
  );

const store = createStore(reducer, initialState, enhancer);
export default store;
