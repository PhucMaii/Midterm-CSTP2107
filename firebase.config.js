// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "quiz-8d12a.firebaseapp.com",
  projectId: "quiz-8d12a",
  storageBucket: "quiz-8d12a.appspot.com",
  messagingSenderId: "286839159181",
  appId: "1:286839159181:web:7599800d684d4cb2e665c4",
  measurementId: "G-VQME4J7Z7W"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage }
