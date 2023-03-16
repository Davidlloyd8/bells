import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNVdbxk4i_frY-KN7iNHOEqjtxkFAmWdA",
  authDomain: "bells-f5f14.firebaseapp.com",
  projectId: "bells-f5f14",
  storageBucket: "bells-f5f14.appspot.com",
  messagingSenderId: "120902168739",
  appId: "1:120902168739:web:08ec933b0f064773604f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };