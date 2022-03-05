import {IAuthState} from '../../data/models';
import {SET_SELECTED_GROUP, SIGN_IN, SIGN_OUT} from './authTypes';

interface IInitialState {
  credentials: object;
  authState: IAuthState;
  selectedGroup: string;
}
const initialState: IInitialState = {
  credentials: {
    username: '',
    password: '',
  },
  authState: {
    accessToken: '',
    refreshToken: '',
    authenticated: false,
  },
  selectedGroup: '',
};
interface IActionType {
  type: string;
  payload: string | object;
}
const reducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case SIGN_IN: {
      return {...state, authState: action.payload};
    }
    case SIGN_OUT: {
      return {
        ...state,
        authState: {accessToken: '', refreshToken: '', authenticated: false},
      };
    }
    case SET_SELECTED_GROUP: {
      return {...state, selectedGroup: action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
