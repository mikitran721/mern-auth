// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e1015.firebaseapp.com",
  projectId: "mern-auth-e1015",
  storageBucket: "mern-auth-e1015.appspot.com",
  messagingSenderId: "158159672419",
  appId: "1:158159672419:web:bef4f4a79f42b97ee51456",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
