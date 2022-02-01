/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {IEvent} from '../../data/models';
import {ADD_EVENT, DELETE_EVENT} from './userTypes';

interface IInitialStateProps {
  totalEvents: number;
  events: IEvent[];
}
const initialState: IInitialStateProps = {
  totalEvents: 0,
  events: [
    {
      id: '1',
      eventType: 'Anniversary',
      clientName: 'John B',
      phoneNumber: '0433023033',
      menu: 'pasta',
      peopleNo: 20,
      date: 1640781143963,
      reservationFee: 100,
      menuPrice: 30,
      totalPrice: 600,
      payableRest: 500,
      takeout: false,
      otherDetails: '',
    },
    {
      id: '2',
      eventType: 'Anniversary',
      clientName: 'John B',
      phoneNumber: '0433023033',
      menu: 'pasta',
      peopleNo: 20,
      date: 1640781143963,
      reservationFee: 100,
      menuPrice: 30,
      totalPrice: 600,
      payableRest: 500,
      takeout: false,
      otherDetails: '',
    },
  ],
};
interface IActionType {
  type: string;
  payload: any;
}
const reducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case ADD_EVENT: {
      const existingValueIndex = state.events.findIndex(
        event => event.id === action.payload.id,
      );
      if (existingValueIndex > -1) {
        return {
          ...state,
          events: state.events.map((event, i) =>
            existingValueIndex === i ? action.payload : event,
          ),
        };
      }
      return {...state, events: [...state.events, action.payload]};
    }
    case DELETE_EVENT: {
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default reducer;
