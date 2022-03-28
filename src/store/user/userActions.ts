import {IEvent} from '../../data/models';
import {ADD_EVENT, DELETE_EVENT} from './userTypes';

const mockPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 300);
});

export const createEvent = (event: IEvent) => async (dispatch: any) => {
  const response = await mockPromise;
  dispatch(addEvent(event));
};
export const addEvent = (event: IEvent) => async dispatch => {
  return {
    type: ADD_EVENT,
    payload: event,
  };
};

export const deleteEvent = (eventId: string) => {
  return {
    type: DELETE_EVENT,
    payload: eventId,
  };
};
