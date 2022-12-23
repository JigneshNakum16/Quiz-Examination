import registerReducer from "./store/Reducers/register";
import fetchReducer from "./store/Reducers/quiz";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  register: registerReducer,
  quiz: fetchReducer,
});

export default rootReducer;
