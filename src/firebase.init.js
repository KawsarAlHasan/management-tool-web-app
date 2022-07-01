// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1hpJuJHRde3Dkz6v73o-HfIUXTuzrpiw",
  authDomain: "task-management-tool-web-app.firebaseapp.com",
  projectId: "task-management-tool-web-app",
  storageBucket: "task-management-tool-web-app.appspot.com",
  messagingSenderId: "944140495094",
  appId: "1:944140495094:web:1441c154c035c9e88da4d7",
  measurementId: "G-YGXSZYMEK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;