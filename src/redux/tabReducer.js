import { SET_TAB_FILTER } from "./types";

const initialState = {
  tabFilter: "showCheapest",
};

function tabReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TAB_FILTER:
      return { ...state, tabFilter: action.filter };
    default:
      return state;
  }
}

export default tabReducer;
