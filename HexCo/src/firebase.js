import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUAxJosZ5qXYiQOFXcUHgF21JbrxGfpss",
  authDomain: "hexco-1c1b9.firebaseapp.com",
  projectId: "hexco-1c1b9",
  storageBucket: "hexco-1c1b9.appspot.com",
  messagingSenderId: "635233624634",
  appId: "1:635233624634:web:579917d6a46ab7562c0b03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)