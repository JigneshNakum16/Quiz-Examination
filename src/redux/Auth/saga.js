import axios from "axios";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import { authActions } from "./action";

export function* userRegistration() {
  yield takeLatest(authActions.REGISTER_START, function* ({data}) {
    try {
      const response = yield axios.post(`https://test-examination-9a8d5-default-rtdb.firebaseio.com/register.json`,data);
      // console.log('response', response)
      yield put({
        type: authActions.REGISTER_SUCCESS,
        payload: response?.data?.name
      });
    } catch (error) {
      console.log("error", error);
      yield put({
        type: authActions.REGISTER_FAIL,
        payload: error?.response?.data?.body?.message,
      });
  
    }
  });
}



export default function* authSaga() {
  yield all([
     fork(userRegistration)
    ]);
}
