const initialState = {
  totalEvents: 0,
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
