import { UserActionTypes } from "./types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const signInSucess = (user) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_SUCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: UserActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: errorMessage,
});
