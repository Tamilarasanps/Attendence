// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVpUCZZ_7ERIuLiGbl-9rH0W7BpU835DU",
  authDomain: "attendence-mangament-system.firebaseapp.com",
  projectId: "attendence-mangament-system",
  storageBucket: "attendence-mangament-system.firebasestorage.app",
  messagingSenderId: "546394487838",
  appId: "1:546394487838:web:7fa1aa0f1a0e3281ab420f",
  measurementId: "G-HC6JYX49LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
