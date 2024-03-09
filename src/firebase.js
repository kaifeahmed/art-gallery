// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSxVXVsdB0wS8QLFLB3pskqBpVF06QEG8",
  authDomain: "art-gallery-20516.firebaseapp.com",
  databaseURL: "https://art-gallery-20516-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "art-gallery-20516",
  storageBucket: "art-gallery-20516.appspot.com",
  messagingSenderId: "305247874592",
  appId: "1:305247874592:web:1e57f88098309385a35645"
};


export const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export default app;
