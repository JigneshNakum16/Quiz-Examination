import * as actionTypes from "../Actions/actionType";
import updateObject from "../../components/Utility";

const initialState = {
  allQue: [],
  currentQue: {},
  nextQue: {},
  queIndex: 0,
  answer: "",
  queCount: 0,
  trueAns: 0,
  falseAns: 0,
  error: null,
};

// ...question,
//   currentQue: question.allQue[question.queIndex],
//   nextQue: question.allQue[question.queIndex + 1],
//   queIndex: question.queIndex + 1,
//   answer: question.allQue[question.queIndex]?.answer,
//   queCount: question.queCount + 1,

const fetchQuestionStart = (state, action) => {
  return updateObject(state, action);
};

const fetchQuestionSuccess = (state, action) => {

  const que = {
    allQue: action.data,
    currentQue: action.data[state.queIndex],
    nextQue: action.data[state.queIndex + 1],
    queIndex: state.queIndex+1,
    answer: action.data[state.queIndex]?.answer,
    queCount: state.queIndex + 1,
  };

  return updateObject(state, que);
};

const fetchQuestionFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const Quiz = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTION_START:
      return fetchQuestionStart(state, action);

    case actionTypes.FETCH_QUESTION_SUCCESS:
      return fetchQuestionSuccess(state, action);

    case actionTypes.FETCH_QUESTION_FAIL:
      return fetchQuestionFail(state, action);

    default:
      return state;
  }
};

export default Quiz;
