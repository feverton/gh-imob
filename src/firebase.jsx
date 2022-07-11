// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUsNpH-cDsPsWRwBa3E6wLv-Uww_jMfb4",
  authDomain: "requisicoes-app-cda82.firebaseapp.com",
  databaseURL: "https://requisicoes-app-cda82.firebaseio.com",
  projectId: "requisicoes-app-cda82",
  storageBucket: "requisicoes-app-cda82.appspot.com",
  messagingSenderId: "160949336623",
  appId: "1:160949336623:web:ce46b6115392e9cb9764da",
  measurementId: "G-CJWKNFTKG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);