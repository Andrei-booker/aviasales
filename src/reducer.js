const initialState = {
  tickets: [],
  transferFilter: [],
  showAllTickets: false,
  tabFilter: "SHOW_CHEAPEST",
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_ALL_TICKETS":
      console.log("Show all tickets: ", action.value);
      return { ...state, showAllTickets: action.value };
    case "SET_TRANSFER_FILTER":
      console.log("Transfer filter: ", action);
      if (action.isChecked && action.checkboxId !== "all") {
        console.log(action);
        return {
          ...state,
          transferFilter: [...state.transferFilter, action.checkboxId],
        };
      }
      {
        const newTransferFilter = state.transferFilter.filter(
          (item) => item !== action.checkboxId,
        );
        return { ...state, transferFilter: newTransferFilter };
      }

    case "SET_TAB_FILTER":
      console.log("Tab filter: ", action.filter);
      return { ...state, tabFilter: action.filter };
    default:
      console.log("default");
      return state;
  }
}

export default reducer;
