// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAukF-tqSanQ0Q5-xiZEicLa68D7PEYp9c",
  authDomain: "auth-integration-973a9.firebaseapp.com",
  projectId: "auth-integration-973a9",
  storageBucket: "auth-integration-973a9.firebasestorage.app",
  messagingSenderId: "409596944255",
  appId: "1:409596944255:web:0355f604461c9288d8444a",
  measurementId: "G-WG08MY8JTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;