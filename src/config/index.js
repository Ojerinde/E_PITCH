// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEx76jfmKKVHBNADNDL3a9f7gnOYz7xvQ",
  authDomain: "e-pitch-jor-el.firebaseapp.com",
  projectId: "e-pitch-jor-el",
  storageBucket: "e-pitch-jor-el.appspot.com",
  messagingSenderId: "1017220797902",
  appId: "1:1017220797902:web:49ef39c4088b9d16ab879f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app