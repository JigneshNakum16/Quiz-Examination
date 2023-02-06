import axios from "axios";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import { quizActions } from "./action";

export function* fetchQuestion() {
  yield takeLatest(quizActions.FETCH_QUESTION_START, function* () {
    try {
      const response = yield axios.get(
        `https://test-examination-9a8d5-default-rtdb.firebaseio.com/Questions.json`
      );
      // console.log("response*********", response);
      yield put({
        type: quizActions.FETCH_QUESTION_SUCCESS,
        payload: response?.data,
      });
    } catch (error) {
      console.log("error", error);
      yield put({
        type: quizActions.FETCH_QUESTION_FAIL,
        payload: error?.response?.data,
      });
    }
  });
}

// export function* currentQuestion() {
//   yield takeLatest(quizActions.CURRENT_QUESTION_START, function* ({ data }) {
//     // console.log("currentQue Saga", data);
//     yield put({
//       type: quizActions.CURRENT_QUESTION_SUCCESS,
//       CurrentQue: data,
//     });
//   });
// }

export default function* authSaga() {
  yield all([fork(fetchQuestion)]);
}
