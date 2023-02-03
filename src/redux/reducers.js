import { combineReducers } from "redux";
import AuthReducer from "./Auth/reducer";
import QuizReducer from "./Quiz/reducer";


const rootReducer = combineReducers({
  quiz: QuizReducer,
  auth : AuthReducer
});

export default rootReducer;
