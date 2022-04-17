// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFXw4-PRJwChGloRvBMOTzdNyxeEWlMAI",
  authDomain: "assignment-x-68d60.firebaseapp.com",
  projectId: "assignment-x-68d60",
  storageBucket: "assignment-x-68d60.appspot.com",
  messagingSenderId: "96530956344",
  appId: "1:96530956344:web:a20ea45006a7e976a066cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;