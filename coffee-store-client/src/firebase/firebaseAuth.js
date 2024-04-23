// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzG1zATBBbvjYEOOtFTT0_h7S-_-5um_o",
  authDomain: "coffee-store-b221e.firebaseapp.com",
  projectId: "coffee-store-b221e",
  storageBucket: "coffee-store-b221e.appspot.com",
  messagingSenderId: "700686159155",
  appId: "1:700686159155:web:6205bd2302eabc735dc246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth