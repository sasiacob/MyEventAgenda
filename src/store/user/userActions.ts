import {IEvent} from '../../data/models';
import {ADD_EVENT, DELETE_EVENT} from './userTypes';

export const addEvent = (event: IEvent) => {
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
