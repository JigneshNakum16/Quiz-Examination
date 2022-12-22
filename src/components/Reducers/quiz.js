import * as actionTypes from "../Actions/actionType";
import updateObject from "../Utility";

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
//   console.log("fetchQue", action.fetchQue);
  const que = {
    allQue:action.fetchQue,
    currentQue: action.fetchQue[state.queIndex],
    nextQue: action.fetchQue[state.queIndex + 1],
    queIndex: state.queIndex,
    answer: action.fetchQue[state.queIndex]?.answer,
    queCount: state.queIndex + 1,
  }

// console.log('que', que)
  return updateObject(state ,que);
};

const fetchQuestionFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

// const fetchQuestion = (state, action) => {
//     console.log('action.que', action.que)
//     return updateObject(state,{que : action.que})
// }

const Quiz = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTION_START:
      return fetchQuestionStart(state, action);

    case actionTypes.FETCH_QUESTION_SUCCESS:
      return fetchQuestionSuccess(state, action);

    case actionTypes.FETCH_QUESTION_FAIL:
      return fetchQuestionFail(state, action);

    // case actionTypes.FETCH_QUESTION:
    //     return fetchQuestion(state,action)

    default:
      return state;
  }
};

export default Quiz;
