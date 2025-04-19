// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO5ovO5lh4zCf4VAe6NxM3SYcxnHUHP74",
  authDomain: "prepnest-2175c.firebaseapp.com",
  projectId: "prepnest-2175c",
  storageBucket: "prepnest-2175c.firebasestorage.app",
  messagingSenderId: "140664170307",
  appId: "1:140664170307:web:4095bec0f1ae44430071f6",
  measurementId: "G-RB31JEWPY1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const dm = getFirestore(app);

