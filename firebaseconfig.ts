// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGv5dPz91GefibZNXveDs1-3Hp3VXkqBk",
  authDomain: "prizzy-d1c45.firebaseapp.com",
  projectId: "prizzy-d1c45",
  storageBucket: "prizzy-d1c45.firebasestorage.app",
  messagingSenderId: "733057654653",
  appId: "1:733057654653:web:b0feb10ec6db0833e93614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}
