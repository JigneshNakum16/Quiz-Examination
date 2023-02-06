
import { authActions } from "./action";


const initialState = {
  data: null,
  error: null,
  loading : null,
  success : null
};


const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.REGISTER_START:
      return {
        ...state ,
        success : false ,
        loading :true
      }

    case authActions.REGISTER_SUCCESS:
      // console.log('action.payload', action.payload)
      return {
        ...state,
        data : action.payload,
        loading : false ,
        success : true
      }

    case authActions.REGISTER_FAIL:
      return {
        ...state,
        error : action.payload,
        loading : false,
        success : false
      } 

    default:
      return state;
  }
};

export default AuthReducer;
