export const quizActions = {
  FETCH_QUESTION_START: "FETCH_QUESTION_START",
  FETCH_QUESTION_SUCCESS: "FETCH_QUESTION_SUCCESS",
  FETCH_QUESTION_FAIL: "FETCH_QUESTION_FAIL",

  // CURRENT_QUESTION_START: "CURRENT_QUESTION_START",
  // CURRENT_QUESTION_SUCCESS: "CURRENT_QUESTION_SUCCESS",
  // CURRENT_QUESTION_FAIL: "CURRENT_QUESTION_FAIL",

  fetchQuestion: () => {
    return {
      type: quizActions.FETCH_QUESTION_START,
    };
  },

  // currentQuestion: (currentIndex) => {
  //   console.log("currentQue Actions", currentIndex);
  //   return {
  //     type: quizActions.CURRENT_QUESTION_START,
  //     data: currentIndex ,
  //   }; 
  // },
};
