// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0nmwSVK46MUn1lpxrrlS9IhSQbpO2hPE",
  authDomain: "netflix-gpt-16016.firebaseapp.com",
  projectId: "netflix-gpt-16016",
  storageBucket: "netflix-gpt-16016.appspot.com",
  messagingSenderId: "1081373919951",
  appId: "1:1081373919951:web:3fcfb920d05c43969b05ba",
  measurementId: "G-YF8C1WX9MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();