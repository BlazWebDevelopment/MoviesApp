// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtoOX3YlJv_wnKsNBexiDtBSWDVyETWA8",
  authDomain: "movies-app-a4c4b.firebaseapp.com",
  databaseURL:
    "https://movies-app-a4c4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movies-app-a4c4b",
  storageBucket: "movies-app-a4c4b.appspot.com",
  messagingSenderId: "576474639421",
  appId: "1:576474639421:web:23c77dc9f5049671740e54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
