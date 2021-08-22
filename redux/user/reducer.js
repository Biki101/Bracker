import { UserActionTypes } from "./types";

const ININTIAL_STATE = {
  currentUser: null,
  isSigningIn: false,
  errorMessage: undefined,
};

const userReducer = (state = ININTIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGNIN_START:
      return {
        ...state,
        isSigningIn: true,
      };
    case UserActionTypes.GOOGLE_SIGNIN_SUCESS:
      return {
        ...state,
        isSigningIn: false,
        currentUser: action.payload,
        errorMessage: null,
      };
    case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
