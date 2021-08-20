import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDvP7VCWZv5VkLIYjTx2KBv4nltUW7_FGQ",
  authDomain: "bracker-223a3.firebaseapp.com",
  projectId: "bracker-223a3",
  storageBucket: "bracker-223a3.appspot.com",
  messagingSenderId: "1034809756320",
  appId: "1:1034809756320:web:1eee45d009d851a6f417c5",
  measurementId: "G-9WQ06P6G2L",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.collection("users").doc(`${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const displayName = userAuth.displayName;
    const email = userAuth.email;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
    return userRef;
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
