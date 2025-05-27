// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1EVGVzliooogPU5w9xjHwoN4jiohRGVY",
  authDomain: "mern-stack-ajyban.firebaseapp.com",
  projectId: "mern-stack-ajyban",
  storageBucket: "mern-stack-ajyban.firebasestorage.app",
  messagingSenderId: "887935590599",
  appId: "1:887935590599:web:5fac1b1aa0fb7a3117dee2"
};



export default function initFirebase() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}