import { UserActionTypes } from "./types";

const Inintial_State = {
  currentUser: null,
  isSigningIn: false,
  errorMessage: undefined,
};

const userReducer = (state = Inintial_State, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGNIN_START:
      return {
        ...state,
        isSigningIn: true,
      };
    case UserActionTypes.GOOGLE_SIGNIN_SUCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case UserActionTypes.GOOGLE_SIGNIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    default:
      return state;
  }
};

export default userReducer;
