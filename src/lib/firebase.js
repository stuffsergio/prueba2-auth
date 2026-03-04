import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyrB-7TppH8jnsSU-G11keEcRAN3aIqRQ",
  authDomain: "auth-prueba1.firebaseapp.com",
  projectId: "auth-prueba1",
  storageBucket: "auth-prueba1.firebasestorage.app",
  messagingSenderId: "795853465063",
  appId: "1:795853465063:web:a8fb7c9e5064fb89150942",
  measurementId: "G-H5HGJ7D7FK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
