import {
  GET_TICKETS_LIST,
  SHOW_ALL_TICKETS,
  SET_TRANSFER_FILTER,
  SHOW_CHEAPEST_TICKETS,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  GET_SEARCH_ID,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  SHOW_FASTEST_TICKETS,
  SHOW_OPTIMAL_TICKETS,
} from "./types";

export function loaderOn() {
  return { type: LOADER_DISPLAY_ON };
}

export function loaderOff() {
  return { type: LOADER_DISPLAY_OFF };
}

export function errorOn(text) {
  return { type: ERROR_DISPLAY_ON, text };
}

export function errorOff() {
  return { type: ERROR_DISPLAY_OFF };
}

export function getTicketsList() {
  return async (dispatch) => {
    try {
      dispatch(loaderOn());
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/search`,
      );
      if (response.status >= 500 && response.status < 600) {
        setTimeout(response, 1000);
      }
      const data = await response.json();
      const { searchId } = data;
      dispatch({
        type: GET_SEARCH_ID,
        searchId,
      });
      const fetchRequest = async () => {
        try {
          const ticketsResponse = await fetch(
            `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
          );
          if (ticketsResponse.status >= 500 && ticketsResponse.status < 600) {
            setTimeout(fetchRequest, 1000);
          } else {
            const ticketsJson = await ticketsResponse.json();
            const { tickets, stop } = ticketsJson;
            dispatch({
              type: GET_TICKETS_LIST,
              tickets,
              stop,
            });
            if (!stop) fetchRequest();
            if (stop) dispatch(loaderOff());
          }
        } catch (err) {
          dispatch(errorOn("Ошибка внутри фетч запроса"));
          dispatch(loaderOff());
        }
      };
      fetchRequest();
    } catch (err) {
      dispatch(errorOn("Ошибка API"));
      dispatch(loaderOff());
    }
  };
}

export function showAllTickets(value) {
  return { type: SHOW_ALL_TICKETS, value };
}

export function setTransferFilter(checkboxValue, isChecked) {
  return { type: SET_TRANSFER_FILTER, checkboxValue, isChecked };
}

export function showCheapestTickets(filter) {
  return { type: SHOW_CHEAPEST_TICKETS, filter };
}

export function showFastestTickets(filter) {
  return { type: SHOW_FASTEST_TICKETS, filter };
}

export function showOptimalTickets(filter) {
  return { type: SHOW_OPTIMAL_TICKETS, filter };
}
