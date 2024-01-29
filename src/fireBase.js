import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_rMg7GUKTGgG_rFVywhmVGdHKxVuGoSA",
  authDomain: "linkedin-clone-5edcd.firebaseapp.com",
  projectId: "linkedin-clone-5edcd",
  storageBucket: "linkedin-clone-5edcd.appspot.com",
  messagingSenderId: "43800027797",
  appId: "1:43800027797:web:c6a6aa28c83e8dd57df19c",
  measurementId: "G-H8ZRCSW0GG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
