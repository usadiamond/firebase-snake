// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjcooViPoRmt0mSI65_s7GnIEorPEfcZI",
  authDomain: "fir-snake-38abc.firebaseapp.com",
  projectId: "fir-snake-38abc",
  storageBucket: "fir-snake-38abc.firebasestorage.app",
  messagingSenderId: "437612710721",
  appId: "1:437612710721:web:88d687106ac06eef17efc0",
  databaseURL: "https://fir-snake-38abc-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
