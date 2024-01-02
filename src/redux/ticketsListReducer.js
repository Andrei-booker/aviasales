import { GET_TICKETS_LIST } from "./types";

const initialState = {
  ticketsList: [],
};

function ticketsListReducer(state = initialState, action) {
  console.log("ticketsListReducer > ", action);
  switch (action.type) {
    case GET_TICKETS_LIST:
      return { ...state, ticketsList: action.tickets };
    default:
      return state;
  }
}

export default ticketsListReducer;
