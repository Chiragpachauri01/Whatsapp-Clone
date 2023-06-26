import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYbNk-uIhDJ-WWMhCc-RiK_qhNR8_oHog",
  authDomain: "whatsapp-clone-main-cd388.firebaseapp.com",
  projectId: "whatsapp-clone-main-cd388",
  storageBucket: "whatsapp-clone-main-cd388.appspot.com",
  messagingSenderId: "699822212043",
  appId: "1:699822212043:web:ef2b1dd125acf6cebbac4e",
  measurementId: "G-EM37CVF9Y3"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
