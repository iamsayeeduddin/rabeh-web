// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6PQ4eSdQvyaVwYtLtIrGRtlpscLOVRig",
  authDomain: "rabeh-98c1c.firebaseapp.com",
  projectId: "rabeh-98c1c",
  storageBucket: "rabeh-98c1c.appspot.com",
  messagingSenderId: "52116746541",
  appId: "1:52116746541:web:d1eab890b94fe81d71a3a4",
  measurementId: "G-NG5TEPHJ7Y",
};

// Initialize Firebase
let app;

if (!app && typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
}

const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
