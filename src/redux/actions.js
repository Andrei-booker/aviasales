import {
  GET_TICKETS_LIST,
  SHOW_ALL_TICKETS,
  SET_TRANSFER_FILTER,
  SET_TAB_FILTER,
} from "./types";

export function getTicketsList() {
  return async (dispatch) => {
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/search`,
    );
    const data = await response.json();
    const { searchId } = data;
    const ticketsResponse = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );
    const ticketsJson = await ticketsResponse.json();
    const { tickets } = ticketsJson;
    dispatch({
      type: GET_TICKETS_LIST,
      tickets,
    });
  };
}

export function showAllTickets(value) {
  return { type: SHOW_ALL_TICKETS, value };
}

export function setTransferFilter(checkboxId, isChecked) {
  return { type: SET_TRANSFER_FILTER, checkboxId, isChecked };
}

export function setTabFilter(filter) {
  return { type: SET_TAB_FILTER, filter };
}
