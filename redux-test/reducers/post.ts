import { produce } from 'immer';
import { ADD_POST, AddPostAction } from '../actions/post';

const initialState: string[] = [];

// 액션이 여러개면 AddPostAction | ??? | ??? ... 이렇게
const postReducer = (prevState = initialState, action: AddPostAction): string[] => produce(prevState, (draft) => {
  switch (action.type) {
    case ADD_POST:
      draft.push(action.data);
      break;
    default:
      break;
  }
});

export default postReducer;
