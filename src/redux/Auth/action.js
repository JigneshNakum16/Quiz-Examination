export const authActions = {
  REGISTER_START: "REGISTER_START",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",

  userRegistration: (RegisterData) => {
    console.log("RegisterData", RegisterData);
    return {
      type: authActions.REGISTER_START,
      data: RegisterData,
    };
  },
};
