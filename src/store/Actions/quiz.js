import * as actionType from "./actionType";
import axios from "axios";

export const fetchQuestionStart = () => {
  return {
    type: actionType.FETCH_QUESTION_START,
  };
};

export const fetchQuestionSuccess = (data) => {
  console.log('data', data)
  return {
    type: actionType.FETCH_QUESTION_SUCCESS,
    data,
  };
};

export const fetchQuestionFail = (error) => {
  console.log('error', error)
  return {
    type: actionType.FETCH_QUESTION_FAIL,
    error,
  };
};

export const fetchQuestion = () => {

  return async (dispatch) => {
      debugger
    dispatch(fetchQuestionStart());

    await axios
      .get(
        `https://test-examination-9a8d5-default-rtdb.firebaseio.com/Questions.json`
      )
      .then((response) => {
        console.log('response', response)
        dispatch(fetchQuestionSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(fetchQuestionFail(error));
      });
  };
};
