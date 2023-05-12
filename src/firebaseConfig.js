// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyAnfxYUnPeE0QjJmLr585Qz5AfzRQB2sW4",
  authDomain: "my-journal-c0b42.firebaseapp.com",
  projectId: "my-journal-c0b42",
  storageBucket: "my-journal-c0b42.appspot.com",
  messagingSenderId: "846998898227",
  appId: "1:846998898227:web:74b29e6e99e6ac1d5bc546"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()