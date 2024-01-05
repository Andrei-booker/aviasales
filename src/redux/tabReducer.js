import {
  SHOW_CHEAPEST_TICKETS,
  SHOW_FASTEST_TICKETS,
  SHOW_OPTIMAL_TICKETS,
} from "./types";

const initialState = {
  tabFilter: "showCheapest",
};

function tabReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_CHEAPEST_TICKETS:
      return { ...state, tabFilter: action.filter };

    case SHOW_FASTEST_TICKETS:
      return { ...state, tabFilter: action.filter };

    case SHOW_OPTIMAL_TICKETS:
      return { ...state, tabFilter: action.filter };

    default:
      return state;
  }
}

export default tabReducer;
