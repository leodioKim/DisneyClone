// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjVG7Dr8lZNFeCve9G6VaYkGxzP-rpNQ",
  authDomain: "react-disney-plus-app-f5197.firebaseapp.com",
  projectId: "react-disney-plus-app-f5197",
  storageBucket: "react-disney-plus-app-f5197.appspot.com",
  messagingSenderId: "978959321833",
  appId: "1:978959321833:web:2252daa9fbacb97259be78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
