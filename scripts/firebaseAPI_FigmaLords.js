// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc0AZ3a10csp8tbYhNCM0XwaWy8zpEsrY",
    authDomain: "figma-lords-hackathon.firebaseapp.com",
    projectId: "figma-lords-hackathon",
    storageBucket: "figma-lords-hackathon.appspot.com",
    messagingSenderId: "274548729637",
    appId: "1:274548729637:web:b91ed1435b1d0c39b79ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();