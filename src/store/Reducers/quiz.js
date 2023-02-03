import * as actionTypes from "../Actions/actionType";

const initialState = {
  allQue: null,
  currentQue: null,
  nextQue: null,
  queIndex: 0,
  answer: "",
  queCount: 0,
  error: null,
  loading : false
};


const Quiz = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_QUESTION_START:
      return {
        ...state,
        loading  : true
      }

    case actionTypes.FETCH_QUESTION_SUCCESS:
      console.log('Data', action.payload)
      return {
        ...state,
        data : action.payload,
        error : null,
        loading : false
      
      }

    case actionTypes.FETCH_QUESTION_FAIL:
      return {
        ...state,
        error : action.payload,
        loading :false
        
      }

    default:
      return state;
  }
};

export default Quiz;
