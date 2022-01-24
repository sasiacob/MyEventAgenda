import {SET_SELECTED_GROUP, SIGN_IN, SIGN_OUT} from './authTypes';

export const signIn = (token: string) => {
  return {
    type: SIGN_IN,
    payload: token,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const setSelectedGroup = (groupId: string) => {
  return {
    type: SET_SELECTED_GROUP,
    payload: groupId,
  };
};
