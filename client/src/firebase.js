// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-personal-blog-ef23a.firebaseapp.com",
  projectId: "my-personal-blog-ef23a",
  storageBucket: "my-personal-blog-ef23a.appspot.com",
  messagingSenderId: "291769239115",
  appId: "1:291769239115:web:a268029c9e5a705798afce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
