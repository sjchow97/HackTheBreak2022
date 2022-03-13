

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDc0AZ3a10csp8tbYhNCM0XwaWy8zpEsrY",
    authDomain: "figma-lords-hackathon.firebaseapp.com",
    projectId: "figma-lords-hackathon",
    storageBucket: "figma-lords-hackathon.appspot.com",
    messagingSenderId: "274548729637",
    appId: "1:274548729637:web:b91ed1435b1d0c39b79ccc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();