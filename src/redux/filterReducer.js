import { SHOW_ALL_TICKETS, SET_TRANSFER_FILTER } from "./types";

const initialState = {
  transferFilter: [],
  showAllTickets: false,
};

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_TICKETS:
      return { ...state, showAllTickets: action.value };
    case SET_TRANSFER_FILTER:
      if (action.isChecked && action.checkboxValue !== "all") {
        return {
          ...state,
          transferFilter: [...state.transferFilter, action.checkboxValue],
        };
      }
      {
        const newTransferFilter = state.transferFilter.filter(
          (item) => item !== action.checkboxValue,
        );
        return { ...state, transferFilter: newTransferFilter };
      }
    default:
      return state;
  }
}

export default filterReducer;
