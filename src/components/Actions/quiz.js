import * as actionType from "./actionType";
import axios from "axios";

export const fetchQuestionStart = () => {
  return {
    type: actionType.FETCH_QUESTION_START,
  };
};

export const fetchQuestionSuccess = (fetchQue) => {
  return {
    type: actionType.FETCH_QUESTION_SUCCESS,
    fetchQue,
  };
};

export const fetchQuestionFail = (error) => {
  return {
    type: actionType.FETCH_QUESTION_FAIL,
    error,
  };
};

export const fetchQuestion = (question) => {
//   console.log("question", question);
  return async (dispatch) => {
    dispatch(fetchQuestionStart());

    await axios
      .get(
        `https://test-examination-9a8d5-default-rtdb.firebaseio.com/Questions.json`
      )
      .then((response) => {
        dispatch(fetchQuestionSuccess(response?.data));
      })
      .catch((error) => {
        dispatch(fetchQuestionFail(error));
      });
  };
};
