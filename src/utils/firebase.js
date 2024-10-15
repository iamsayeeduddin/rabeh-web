// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "rabeh-98c1c.firebaseapp.com",
  projectId: "rabeh-98c1c",
  storageBucket: "rabeh-98c1c.appspot.com",
  messagingSenderId: "52116746541",
  appId: "1:52116746541:web:d1eab890b94fe81d71a3a4",
  measurementId: "G-NG5TEPHJ7Y",
};

// Initialize Firebase
let app;

if (typeof window !== "undefined") {
  // Check if Firebase apps have already been initialized
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0]; // Use the existing initialized app
  }
}

const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
