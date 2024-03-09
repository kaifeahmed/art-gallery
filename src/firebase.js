// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEDatnnS__EIPuEZ98-Dxy2FNtJmWxT9g",
  authDomain: "art-gallery-fcc21.firebaseapp.com",
  projectId: "art-gallery-fcc21",
  storageBucket: "art-gallery-fcc21.appspot.com",
  messagingSenderId: "478742838968",
  appId: "1:478742838968:web:cbffe995c7a51f3df13e4d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
