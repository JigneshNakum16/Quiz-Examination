import registerReducer from "./components/Reducers/register";
import fetchReducer from "./components/Reducers/quiz";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  register : registerReducer,
  quiz : fetchReducer
});

export default rootReducer;
