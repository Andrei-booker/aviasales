import { GET_TICKETS_LIST, GET_SEARCH_ID } from "./types";

const initialState = {
  searchId: "",
  ticketsList: [],
  stopFetch: false,
};

export function ticketsListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_ID:
      return { ...state, searchId: action.searchId };
    case GET_TICKETS_LIST:
      return {
        ...state,
        ticketsList: [...state.ticketsList.concat(action.tickets)],
        stopFetch: action.stop,
      };
    default:
      return state;
  }
}

export default ticketsListReducer;
