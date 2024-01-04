// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmClHh44HJdIZ9_MzFLPRKnQ1fzhuU3_g",
  authDomain: "netflixgpt-5b719.firebaseapp.com",
  projectId: "netflixgpt-5b719",
  storageBucket: "netflixgpt-5b719.appspot.com",
  messagingSenderId: "86172290521",
  appId: "1:86172290521:web:d819e03d57d9ff86299dc8",
  measurementId: "G-VXCLGH27PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();