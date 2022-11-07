import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAVISjLv4AgZJAi2JWurTZZZUupB8-I2Hk",
  authDomain: "korakagaz1111.firebaseapp.com",
  databaseURL:
    "https://korakagaz1111-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "korakagaz1111",
  storageBucket: "korakagaz1111.appspot.com",
  messagingSenderId: "261939357308",
  appId: "1:261939357308:web:93fa39ca65933ced380bf9",
  measurementId: "G-51G623131Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
