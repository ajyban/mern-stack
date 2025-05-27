// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTeNrqpnTCq9icHJT9S9M4lK8KkSLPtnc",
  authDomain: "react-app-ajyban.firebaseapp.com",
  projectId: "react-app-ajyban",
  storageBucket: "react-app-ajyban.firebasestorage.app",
  messagingSenderId: "516998063827",
  appId: "1:516998063827:web:4d0b0118fb60eb68a9d626"
};



export default function initFirebase() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
}