import { quizActions } from "./action";

const initialState = {
  allQue: null,
//   currentQue: null,
//   nextQue: null,
//   queIndex: 0,
//   answer: "",
//   queCount: 0,
  error: null,
  loading: false,
};

const QuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case quizActions.FETCH_QUESTION_START:
      return {
        ...state,
        loading: true,
      };

    case quizActions.FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        allQue: action.payload,
        error: null,
        loading: false,
      };

    case quizActions.FETCH_QUESTION_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default QuizReducer;
