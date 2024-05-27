import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-93125.firebaseapp.com",
  projectId: "chatapp-93125",
  storageBucket: "chatapp-93125.appspot.com",
  messagingSenderId: "398338743081",
  appId: "1:398338743081:web:d35e874e8a727ea9803538",
};

const app = initializeApp(firebaseConfig);

// console.log(import.meta.env.VITE_API_KEY);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
