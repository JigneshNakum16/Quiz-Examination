export const quizActions = {

  FETCH_QUESTION_START: "FETCH_QUESTION_START",
  FETCH_QUESTION_SUCCESS: "FETCH_QUESTION_SUCCESS",
  FETCH_QUESTION_FAIL: "FETCH_QUESTION_FAIL",

  fetchQuestion: () => {
    return {
      type: quizActions.FETCH_QUESTION_START,
    };
  },
};
