import * as actionTypes from "../Actions/actionType";
import updateObject from "../../components/Utility";

const initialState = {
  data: null,
  error: null,
};

const registerStart = (state, action) => {
  return updateObject(state, action);
};

const registerSuccess = (state, action) => {
  return updateObject(state, { data: action.data });
};

const registerFail = (state, action) => {
  return updateObject(state, { error: action.error });
};

const Register = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_START:
      return registerStart(state, action);

    case actionTypes.REGISTER_DATA:
      return registerSuccess(state, action);

    case actionTypes.REGISTER_FAIL:
      return registerFail(state, action);

    default:
      return state;
  }
};

export default Register;
