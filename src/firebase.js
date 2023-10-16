// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "weather-bot-92bda.firebaseapp.com",
    projectId: "weather-bot-92bda",
    storageBucket: "weather-bot-92bda.appspot.com",
    messagingSenderId: "933275704485",
    appId: "1:933275704485:web:155c134d0af7433b6d014c"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;