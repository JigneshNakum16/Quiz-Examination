import axios from "axios";
import * as actionType from "./actionType";

export const register_start = () => {
  return {
    type: actionType.REGISTER_START,
  };
};

export const register_success = (data) => {
  console.log("data_Success", data);
  return {
    type: actionType.REGISTER_SUCCESS,
    data,
  };
};

export const register_fail = (error) => {
  return {
    type: actionType.REGISTER_FAIL,
    error,
  };
};

export const registerData = (values) => {
  return async (dispatch) => {
    dispatch(register_start());
    await axios
    .post(
      `https://test-examination-9a8d5-default-rtdb.firebaseio.com/registration.json`,
      values
      )
      .then((response) => { 
        console.log("response", response);
        dispatch(register_success(response.data))
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(register_fail(error))
      });
  };  
};
