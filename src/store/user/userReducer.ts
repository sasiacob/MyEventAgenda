import {IEvent} from '../../data/models';

interface IInitialStateProps {
  totalEvents: number;
  events: IEvent[];
}
const initialState: IInitialStateProps = {
  totalEvents: 0,
  events: [
    {
      id: 1,
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
      id: 2,
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
  payload: number;
}
const reducer = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case 'ADD_EVENT': {
      return {...state, totalEvents: state.totalEvents + 1};
    }

    default:
      return state;
  }
};

export default reducer;
