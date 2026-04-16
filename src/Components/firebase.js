import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwlu9m3QYR-8XBrMT0HipzTEoZQbCpj3I",
  authDomain: "vidya-erp-leads.firebaseapp.com",
  projectId: "vidya-erp-leads",
  storageBucket: "vidya-erp-leads.firebasestorage.app",
  messagingSenderId: "62072789093",
  appId: "1:62072789093:web:53d1bf1d1fb940ba2a4e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👉 Firestore
export const db = getFirestore(app);

// 👉 Auth (OTP ke liye)
export const auth = getAuth(app);