Notas:

SDK de Firebase

1. Usar comando

- npm install firebase

2. Inicializar firebase
   // Import the functions you need from the SDKs you need
   import { initializeApp } from "firebase/app";
   import { getAnalytics } from "firebase/analytics";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDyrB-7TppH8jnsSU-G11keEcRAN3aIqRQ",
authDomain: "auth-prueba1.firebaseapp.com",
projectId: "auth-prueba1",
storageBucket: "auth-prueba1.firebasestorage.app",
messagingSenderId: "795853465063",
appId: "1:795853465063:web:a8fb7c9e5064fb89150942",
measurementId: "G-H5HGJ7D7FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
