// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC6DT88Ch-0XZSpX_VSMxmNvB0hk0T0kc",
  authDomain: "e-pitch-jo-el.firebaseapp.com",
  projectId: "e-pitch-jo-el",
  storageBucket: "e-pitch-jo-el.appspot.com",
  messagingSenderId: "851205227815",
  appId: "1:851205227815:web:c98488476d90266bb75502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut };
