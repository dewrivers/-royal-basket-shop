import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA1v_1xuiv4rZD6UyZTJVGmyjrhDXSgIU4",
  authDomain: "royal-db-47882.firebaseapp.com",
  databaseURL: "https://royal-db-47882-default-rtdb.firebaseio.com",
  projectId: "royal-db-47882",
  storageBucket: "royal-db-47882.appspot.com",
  messagingSenderId: "405912900136",
  appId: "1:405912900136:web:5a44a4ee9ab512dd8d1b1d",
  measurementId: "G-W9R9KLT1LG"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
