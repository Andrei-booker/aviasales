import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import tabReducer from "./tabReducer";
import ticketsListReducer from "./ticketsListReducer";

const rootReducer = combineReducers({
  filterReducer,
  tabReducer,
  ticketsListReducer,
});

export default rootReducer;
