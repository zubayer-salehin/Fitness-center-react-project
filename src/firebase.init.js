// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6lFhLYpg1I6cXYhYQ6z2rIGeEmUyIl9g",
  authDomain: "fitness-center-9cbd4.firebaseapp.com",
  projectId: "fitness-center-9cbd4",
  storageBucket: "fitness-center-9cbd4.appspot.com",
  messagingSenderId: "217100979166",
  appId: "1:217100979166:web:e063705c7cc040a9486b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;