import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import { ticketsListReducer } from "./ticketsListReducer";
import tabReducer from "./tabReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  filterReducer,
  tabReducer,
  ticketsListReducer,
  appReducer,
});

export default rootReducer;
