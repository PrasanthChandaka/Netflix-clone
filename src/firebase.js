import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDePZLzLifLPR13VIcL2WQRVKq8DlL-fjo",
  authDomain: "netflix-79d25.firebaseapp.com",
  projectId: "netflix-79d25",
  storageBucket: "netflix-79d25.appspot.com",
  messagingSenderId: "1010312174315",
  appId: "1:1010312174315:web:b07c032e46994a1d743cae",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
