import {SET_SELECTED_GROUP, SIGN_IN, SIGN_OUT} from './authTypes';

interface IInitialState {
  credentials: object;
  token: string;
  selectedGroup: string;
}
const initialState: IInitialState = {
  credentials: {
    username: '',
    password: '',
  },
  token: '',
  selectedGroup: '',
};
interface IActionType {
  type: string;
  payload: string | object;
}
const reducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case SIGN_IN: {
      return {...state, token: action.payload};
    }
    case SIGN_OUT: {
      return {...state, token: ''};
    }
    case SET_SELECTED_GROUP: {
      return {...state, selectedGroup: action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
