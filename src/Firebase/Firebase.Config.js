



import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC2Z8URfew95wv0aRztUvrL9Nsk42zvLHI",
  authDomain: "trust-farms.firebaseapp.com",
  projectId: "trust-farms",
  storageBucket: "trust-farms.appspot.com",
  messagingSenderId: "650842304347",
  appId: "1:650842304347:web:a58f31e223371ef60a747e",
  measurementId: "G-GV4TF7Q900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;