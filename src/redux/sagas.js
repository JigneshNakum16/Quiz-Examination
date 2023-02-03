import { all } from "redux-saga/effects";
import authSaga from "./Auth/saga";
import quizSaga from "./Quiz/saga"

export default function* rootSaga() {
  yield all([authSaga(),quizSaga()]);
}
