// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

import{getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIwg6RaAjuWOPHUjTfIy3TOG2gmWk97BA",
  authDomain: "blogx-6a2c7.firebaseapp.com",
  projectId: "blogx-6a2c7",
  storageBucket: "blogx-6a2c7.appspot.com",
  messagingSenderId: "864179774861",
  appId: "1:864179774861:web:d6b8848dbf8d78a48689c4",
  measurementId: "G-EZEX863ZX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);
export const auth= getAuth(app);
export const provider = new GoogleAuthProvider();
