// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPq9OrfOOIKGtsAteHb0NCKImDvKwTzEA",
  authDomain: "realtor-clone-react-7c5b5.firebaseapp.com",
  projectId: "realtor-clone-react-7c5b5",
  storageBucket: "realtor-clone-react-7c5b5.appspot.com",
  messagingSenderId: "533807986085",
  appId: "1:533807986085:web:9c113432802080ea6f644c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();