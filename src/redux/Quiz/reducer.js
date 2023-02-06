import { quizActions } from "./action";

const initialState = {
  allQue: null,
  currentQueIdx: 0,
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
      // console.log("Fetch Question", action.payload);
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

    // case quizActions.CURRENT_QUESTION_START:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case quizActions.CURRENT_QUESTION_SUCCESS:
    //   // console.log("currentQue reducer", action.CurrentQue);
    //   return {
    //     ...state,
    //     currentQueIdx: action.CurrentQue,
    //     error: null,
    //     loading: false,
    //   };

    // case quizActions.CURRENT_QUESTION_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     loading: false,
    //   };

    default:
      return state;
  }
};

export default QuizReducer;
