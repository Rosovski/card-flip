import cardsLengthReducer from "./cardsLength";
import cardsReducer from "./cards";
import resetReducer from "./reset";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  cardsLength: cardsLengthReducer,
  cards: cardsReducer,
  reset: resetReducer,
});

export default allReducers;
