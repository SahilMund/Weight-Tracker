import firebase from "firebase";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2Y6YqrZvANYNILN5OsMt_cP-MfkU9HLI",
  authDomain: "weight-tracker-cb1e4.firebaseapp.com",
  projectId: "weight-tracker-cb1e4",
  storageBucket: "weight-tracker-cb1e4.appspot.com",
  messagingSenderId: "399068537350",
  appId: "1:399068537350:web:abb6f0562695b845a05987",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const fireauth = app.auth();

// setting up firestore as our database
const db = firebase.firestore();
export { db };
