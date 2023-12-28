export function getTicketsList() {
  return { type: "GET_TICKETS_LIST" };
}

export function showAllTickets(value) {
  return { type: "SHOW_ALL_TICKETS", value };
}

export function setTransferFilter(checkboxId, isChecked) {
  return { type: "SET_TRANSFER_FILTER", checkboxId, isChecked };
}

export function setTabFilter(filter) {
  return { type: "SET_TAB_FILTER", filter };
}
