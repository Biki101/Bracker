import { all, call, put, takeLatest } from "redux-saga/effects";
import { UserActionTypes } from "./types";
import { signInSucess, signInFailure } from "./actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "./../../utils/firebase-utils";

export function* getSnapshotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signingInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signingInWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignIn)]);
}
