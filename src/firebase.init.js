// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIXkVPE4Q51JPWFvvrW-UwzBpRQ2FRMyg",
  authDomain: "assignment-10-94243.firebaseapp.com",
  projectId: "assignment-10-94243",
  storageBucket: "assignment-10-94243.appspot.com",
  messagingSenderId: "844291315371",
  appId: "1:844291315371:web:8f3d1068e2e4124ad849ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;