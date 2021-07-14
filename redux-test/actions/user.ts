import { addPost } from './post';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';

export interface LoginRequestAction {
  type: typeof LOG_IN_REQUEST,
  data: { id: string, password: string },
}
export const loginRequest = (data: { id: string, password: string }): LoginRequestAction => ({
  type: LOG_IN_REQUEST,
  data,
});

export interface LoginSuccessAction {
  type: typeof LOG_IN_SUCCESS,
  data: { userId: string, nickname: string },
}
export const loginSuccess = (data: { userId: string, nickname: string }): LoginSuccessAction => ({
  type: LOG_IN_SUCCESS,
  data,
});

export interface LoginFailureAction {
  type: typeof LOG_IN_FAILURE,
  error: Error,
}
export const loginFailure = (error: Error): LoginFailureAction => ({
  type: LOG_IN_FAILURE,
  error,
});

// ThunkDispatch, ThunkAction 은 사실 npm i redux-thunk 하면 제공을 해주는데, 아래처럼 다른 사람이 만든 타이핑에 의존하지 말고 직접 만들어도 보자
export interface ThunkDispatch {
  (thunkAction: ThunkAction): void, // 리턴값이 없는거랑
  <A>(action: A): A, // 리턴값이 어떤것이든 있는거랑
  <TAction>(action: TAction | ThunkAction): TAction, // 위 두개 합친거
}
type ThunkAction = (dispatch: ThunkDispatch) => void;

// Thunk 를 쓰는 이유는 하나의 액션에서 여러개의 액션을 동시에 Dispatch 하고 싶을 경우에 사용함.
export const login = (data: { id: string, password: string }): ThunkAction => (dispatch) => {
  dispatch(loginRequest(data));
  try {
    setTimeout(() => { // 로그인 했다고 가정
      dispatch(loginSuccess({ userId: 'henrykim90', nickname: 'Henry' }));
      dispatch(addPost('test post'));
    }, 1000);
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
export interface LogoutAction {
  type: typeof LOG_OUT,
}

export const logout = (): LogoutAction => ({
  type: LOG_OUT,
});
