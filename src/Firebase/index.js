// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvmpTm6rzoxyXDmDMut5UzTm56b9YiIeQ",
  authDomain: "notesapp-303aa.firebaseapp.com",
  projectId: "notesapp-303aa",
  storageBucket: "notesapp-303aa.appspot.com",
  messagingSenderId: "1023630478940",
  appId: "1:1023630478940:web:c7bf66c9cc1d30cc1b6099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;