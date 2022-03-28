import {IAuthState} from '../../data/models';
import {SET_SELECTED_GROUP, SIGN_IN, SIGN_OUT} from './authTypes';

export const signIn = (accessToken: string, refreshToken = '') => {
  const authState: IAuthState = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    authenticated: true,
  };
  return {
    type: SIGN_IN,
    payload: authState,
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
