import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxNoCLqwLGHhoADu13Cr0hWXdkLfcnLvA",
  authDomain: "luxe-market-e31c3.firebaseapp.com",
  projectId: "luxe-market-e31c3",
  storageBucket: "luxe-market-e31c3.firebasestorage.app",
  messagingSenderId: "934575442568",
  appId: "1:934575442568:web:4a526d6eab4cfc82e3ad3d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);