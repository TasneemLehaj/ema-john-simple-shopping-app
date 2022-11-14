// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAGQIdL66MKxOiRkPVUZeYlqAu61JYZdg",
    authDomain: "ema-john-shopping-app.firebaseapp.com",
    projectId: "ema-john-shopping-app",
    storageBucket: "ema-john-shopping-app.appspot.com",
    messagingSenderId: "631140781108",
    appId: "1:631140781108:web:4839b0e5bc506ee3ae8e61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;